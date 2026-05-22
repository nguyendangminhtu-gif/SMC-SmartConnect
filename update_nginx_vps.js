const { Client } = require('ssh2');
const conn = new Client();

const newConfig = `server {
    server_name daotaouav.io.vn www.daotaouav.io.vn;

    root /var/www/daotaouav.io.vn;
    index index.html;

    location / {
        try_files $uri $uri/ @springboot;
    }

    location @springboot {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location ~ ^/(admin-dashboard\\.html|admin|api|uploads) {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
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

conn.on('ready', () => {
  conn.exec(`cat << 'EOF' > /etc/nginx/sites-available/daotaouav.io.vn\n${newConfig}\nEOF\nnginx -s reload`, (err, stream) => {
    if (err) throw err;
    stream.on('close', () => {
      console.log('Nginx updated and reloaded.');
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
