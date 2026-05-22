const { Client } = require('ssh2');
const conn = new Client();

conn.on('ready', () => {
  conn.exec('cat /etc/nginx/sites-available/daotaouav.io.vn', (err, stream) => {
    if (err) throw err;
    stream.on('close', () => {
      conn.end();
    }).on('data', data => console.log('STDOUT: ' + data))
      .stderr.on('data', data => console.log('STDERR: ' + data));
  });
}).connect({
  host: '45.119.83.233',
  port: 22,
  username: 'root',
  password: 'nSmaPGEY39'
});
