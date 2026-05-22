const Client = require('ssh2-sftp-client');
const { Client: SSHClient } = require('ssh2');
const sftp = new Client();

async function main() {
  const config = {
    host: '45.119.83.233',
    port: 22,
    username: 'root',
    password: 'nSmaPGEY39'
  };

  try {
    console.log('Connecting SFTP...');
    await sftp.connect(config);
    console.log('Uploading cms-backend...');
    
    // Create remote dir if not exists
    const remoteDir = '/var/www/cms-backend';
    const exists = await sftp.exists(remoteDir);
    if (!exists) {
        await sftp.mkdir(remoteDir, true);
    }

    await sftp.uploadDir('d:\\UAV\\cms-backend', remoteDir, {
        filter: (filePath, isDir) => {
           const f = filePath.replace(/\\/g, '/');
           if(f.includes('node_modules')) return false;
           if(f.includes('.git')) return false;
           return true;
        }
    });
    console.log('Upload successful. Now running SSH commands...');
    sftp.end();

    const conn = new SSHClient();
    conn.on('ready', () => {
      console.log('SSH Client :: ready');
      
      const setupCommands = `
        cd /var/www/cms-backend
        npm install
        npm install -g pm2
        pm2 stop cms-admin || true
        pm2 start server.js --name cms-admin
        
        # Create NGINX config for admin.daotaouav.io.vn
        cat << 'EOF' > /etc/nginx/sites-available/admin.daotaouav.io.vn
server {
    listen 80;
    server_name admin.daotaouav.io.vn;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF
        ln -sf /etc/nginx/sites-available/admin.daotaouav.io.vn /etc/nginx/sites-enabled/
        systemctl reload nginx
      `;

      conn.exec(setupCommands, (err, stream) => {
        if (err) throw err;
        stream.on('close', (code, signal) => {
          console.log('Deployment SSH close :: code: ' + code);
          conn.end();
        }).on('data', (data) => {
          console.log('STDOUT: ' + data);
        }).stderr.on('data', (data) => {
          console.log('STDERR: ' + data);
        });
      });
    }).on('error', (err) => {
        console.error('SSH Error:', err);
    }).connect(config);

  } catch (err) {
    console.error('SFTP Error:', err);
    sftp.end();
  }
}
main();
