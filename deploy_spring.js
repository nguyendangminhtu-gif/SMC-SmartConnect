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
      
      const localFile = 'd:\\UAV\\cms-springboot\\target\\cms-springboot-0.0.1-SNAPSHOT.jar';
      const remoteFile = '/var/www/cms-springboot.jar';
      
      console.log('Uploading JAR...');
      sftp.fastPut(localFile, remoteFile, (err) => {
        if (err) throw err;
        console.log('Upload complete!');
        
        conn.exec('pm2 stop cms-admin || true && pm2 delete cms-admin || true && pm2 start java --name "cms-springboot" -- -jar /var/www/cms-springboot.jar && pm2 save', (err, stream) => {
          if (err) throw err;
          stream.on('close', () => {
            console.log('Deployment commands executed.');
            conn.end();
          }).on('data', data => console.log('STDOUT: ' + data))
            .stderr.on('data', data => console.log('STDERR: ' + data));
        });
      });
    });
  }).connect(config);
}

main();
