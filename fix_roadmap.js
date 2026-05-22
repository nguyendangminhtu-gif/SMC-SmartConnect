const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Remove md:justify-normal and md:odd:flex-row-reverse
html = html.replace(/md:justify-normal/g, '');
html = html.replace(/md:odd:flex-row-reverse/g, '');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed roadmap layout overlapping bug');
