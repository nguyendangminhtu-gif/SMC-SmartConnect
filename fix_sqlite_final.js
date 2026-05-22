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
    conn.exec('cd /var/www/cms-backend && npm install sqlite3@latest && npm rebuild sqlite3 --build-from-source && pm2 restart cms-admin', (err, stream) => {
      if (err) throw err;
      stream.on('close', () => conn.end())
            .on('data', data => console.log('STDOUT: ' + data))
            .stderr.on('data', data => console.log('STDERR: ' + data));
    });
  }).connect(config);
}
main();
