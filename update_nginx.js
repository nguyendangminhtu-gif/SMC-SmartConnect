const { Client: SSHClient } = require('ssh2');

async function main() {
  const config = {
    host: '45.119.83.233',
    port: 22,
    username: 'root',
    password: 'nSmaPGEY39'
  };

  const newConfig = `server {
    server_name daotaouav.io.vn www.daotaouav.io.vn;
    root /var/www/daotaouav.io.vn;
    index index.html index.htm index.php;

    location /admin.html {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /admin {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /api {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/daotaouav.io.vn/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/daotaouav.io.vn/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
    if ($host = daotaouav.io.vn) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    server_name daotaouav.io.vn www.daotaouav.io.vn;
    return 404; # managed by Certbot
}
`;

  const conn = new SSHClient();
  conn.on('ready', () => {
    console.log('SSH Client :: ready');
    conn.exec(`cat << 'EOF' > /etc/nginx/sites-available/daotaouav.io.vn\n${newConfig}\nEOF\nsystemctl reload nginx`, (err, stream) => {
      if (err) throw err;
      stream.on('close', () => {
        console.log('NGINX updated & reloaded');
        conn.end();
      })
      .on('data', data => console.log('STDOUT: ' + data))
      .stderr.on('data', data => console.log('STDERR: ' + data));
    });
  }).connect(config);
}
main();
