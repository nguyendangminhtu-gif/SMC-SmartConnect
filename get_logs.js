const { Client } = require('ssh2');

const conn = new Client();
conn.on('ready', () => {
  conn.exec('tail -n 200 /root/.pm2/logs/cms-springboot-error.log', (err, stream) => {
    if (err) throw err;
    stream.on('close', () => conn.end())
          .on('data', data => console.log('STDERR-LOG: ' + data))
          .stderr.on('data', data => console.log('ERR: ' + data));
  });
}).connect({
  host: '45.119.83.233',
  port: 22,
  username: 'root',
  password: 'nSmaPGEY39'
});
