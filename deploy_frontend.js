const fs = require('fs');
const { Client: SSHClient } = require('ssh2');

async function main() {
  const config = {
    host: '45.119.83.233',
    port: 22,
    username: 'root',
    password: 'nSmaPGEY39'
  };

  const conn = new SSHClient();
  conn.on('ready', () => {
    console.log('SSH Client :: ready');
    conn.sftp((err, sftp) => {
      if (err) throw err;
      
      const filesToUpload = [
        { local: 'd:\\UAV\\index.html', remote: '/var/www/daotaouav.io.vn/index.html' },
        { local: 'd:\\UAV\\doi-tac.html', remote: '/var/www/daotaouav.io.vn/doi-tac.html' },
        { local: 'd:\\UAV\\tin-tuc.html', remote: '/var/www/daotaouav.io.vn/tin-tuc.html' },
        { local: 'd:\\UAV\\api_integration.js', remote: '/var/www/daotaouav.io.vn/api_integration.js' },
        { local: 'd:\\UAV\\doi-tac_api.js', remote: '/var/www/daotaouav.io.vn/doi-tac_api.js' },
        { local: 'd:\\UAV\\tin-tuc_api.js', remote: '/var/www/daotaouav.io.vn/tin-tuc_api.js' }
      ];

      let completed = 0;

      filesToUpload.forEach(file => {
        console.log(`Uploading ${file.local} to ${file.remote}...`);
        sftp.fastPut(file.local, file.remote, (err) => {
          if (err) {
            console.error(`Failed to upload ${file.local}: ${err}`);
          } else {
            console.log(`Upload complete: ${file.local}`);
          }
          completed++;
          if (completed === filesToUpload.length) {
             console.log('All frontend files uploaded.');
             conn.end();
          }
        });
      });
    });
  }).connect(config);
}

main();
