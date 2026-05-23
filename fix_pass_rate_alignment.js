const fs = require('fs');
let c = fs.readFileSync('d:/UAV/index.html', 'utf8');

c = c.replace(
    '<div class="text-xl md:text-2xl font-black text-white mb-1 whitespace-nowrap">Tỷ lệ cao</div>',
    '<div class="text-2xl md:text-3xl font-black text-white mb-1 whitespace-nowrap">Tỷ lệ cao</div>'
);

fs.writeFileSync('d:/UAV/index.html', c);
console.log('done');
