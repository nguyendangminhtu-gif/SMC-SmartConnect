const fs = require('fs');
const path = require('path');
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
      
      const filesToUpload = [];
      const dir = 'd:\\\\UAV';
      
      // Get all HTML and CSS files in the root directory
      const files = fs.readdirSync(dir);
      files.forEach(f => {
        if (f.endsWith('.html') || f === 'style.css') {
          filesToUpload.push({
            local: path.join(dir, f),
            remote: `/var/www/daotaouav.io.vn/${f}`
          });
        }
      });

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
             console.log('All frontend HTML and CSS files uploaded successfully.');
             conn.end();
          }
        });
      });
    });
  }).connect(config);
}

main();
