const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const start = html.indexOf('<div class="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16"');
const end = html.indexOf('</section>', start);

let block = html.substring(start, end);

// Fix the wrapper div
block = block.replace(/<div class="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16" data-aos="fade-up" data-aos-delay="200">\s*<div>/, '<div class="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16" data-aos="fade-up" data-aos-delay="200">');

// Fix the swiper-slide class
block = block.replace(/<div class="swiper-slide p-4">/g, '<div class="p-4 h-full flex flex-col">');

// Fix the closing div of the wrapper
block = block.replace(/<\/div>\s*<\/div>\s*$/, '</div>\n            </div>\n        ');

html = html.substring(0, start) + block + html.substring(end);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed grid structure');
