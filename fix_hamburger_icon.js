const fs = require('fs');
let c = fs.readFileSync('d:/UAV/index.html', 'utf8');

c = c.replace(
    '<i class="fa-solid fa-bars-staggered"></i>',
    '<i class="fa-solid fa-bars"></i>'
);

fs.writeFileSync('d:/UAV/index.html', c);
console.log('done');
