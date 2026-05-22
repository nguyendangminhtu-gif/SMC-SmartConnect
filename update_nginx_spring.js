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
    conn.exec('sed -i "s/proxy_pass http:\\/\\/localhost:3005/proxy_pass http:\\/\\/localhost:8080/g" /etc/nginx/sites-available/daotaouav.io.vn.conf && nginx -s reload', (err, stream) => {
      if (err) throw err;
      stream.on('close', () => {
        console.log('Nginx updated for Spring Boot.');
        conn.end();
      }).on('data', data => console.log('STDOUT: ' + data))
        .stderr.on('data', data => console.log('STDERR: ' + data));
    });
  }).connect(config);
}

main();
