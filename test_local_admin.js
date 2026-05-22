const http = require('http');

http.get('http://localhost:8080/admin', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => { console.log('Response code:', res.statusCode, 'Data:', data.substring(0, 100)); });
}).on('error', (err) => {
  console.log('Error:', err.message);
});
