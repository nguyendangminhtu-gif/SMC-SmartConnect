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
    conn.exec('pm2 logs cms-springboot --lines 50 --nostream', (err, stream) => {
      if (err) throw err;
      stream.on('close', () => {
        conn.end();
      }).on('data', data => console.log('STDOUT: ' + data))
        .stderr.on('data', data => console.log('STDERR: ' + data));
    });
  }).connect(config);
}

main();
