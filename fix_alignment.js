const fs = require('fs');
let c = fs.readFileSync('d:/UAV/index.html', 'utf8');

c = c.replace(
    'id="menu-toggle" class="lg:hidden text-white text-3xl focus:outline-none flex items-center justify-center w-12 h-12"',
    'id="menu-toggle" class="lg:hidden text-white text-3xl focus:outline-none flex items-center justify-center w-16 h-16"'
);

c = c.replace(
    '<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">',
    '<div class="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">'
);

c = c.replace(
    '<div class="max-w-2xl" data-aos="fade-right">',
    '<div class="max-w-2xl text-center md:text-left" data-aos="fade-right">'
);

fs.writeFileSync('d:/UAV/index.html', c);
console.log('done');
