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
    conn.exec('cat /etc/nginx/sites-available/daotaouav.io.vn', (err, stream) => {
      if (err) throw err;
      stream.on('close', () => conn.end())
            .on('data', data => console.log('STDOUT: ' + data))
            .stderr.on('data', data => console.log('STDERR: ' + data));
    });
  }).connect(config);
}
main();
