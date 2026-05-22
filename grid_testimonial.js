const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace Swiper wrapper with CSS Grid
html = html.replace(
    /<div class="swiper testimonialSwiper pb-16" data-aos="fade-up" data-aos-delay="200">/g,
    '<div class="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16" data-aos="fade-up" data-aos-delay="200">'
);
html = html.replace(/<div class="swiper-wrapper">/g, '<div>'); // We'll just change the inner wrapper to a normal div or remove it.
// Actually, it's better to just regex replace the specific block.

const blockStart = html.indexOf('<div class="swiper testimonialSwiper pb-16"');
const blockEnd = html.indexOf('</section>', blockStart);
let block = html.substring(blockStart, blockEnd);

// Inside this block, replace:
block = block.replace('<div class="swiper testimonialSwiper pb-16" data-aos="fade-up" data-aos-delay="200">', '<div class="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16" data-aos="fade-up" data-aos-delay="200">');
block = block.replace('<div class="swiper-wrapper">', '');
block = block.replace(/<div class="swiper-slide p-4">/g, '<div class="p-4 h-full flex flex-col">');
block = block.replace(/<div class="speech-bubble p-8 shadow-lg md:p-10">/g, '<div class="speech-bubble p-8 shadow-lg md:p-10 flex-grow">');
block = block.replace('</div>\n                    <div class="swiper-pagination"></div>\n                </div>', '</div>');
block = block.replace('                    <div class="swiper-pagination"></div>\n                </div>', '');

html = html.substring(0, blockStart) + block + html.substring(blockEnd);

// Remove the JS initialization for testimonialSwiper
html = html.replace(/\/\/ 6\. Initialize Swiper for Testimonials[\s\S]*?\/\/ 7\. FAQ Accordion Logic/, '// 7. FAQ Accordion Logic');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Converted testimonial swiper to CSS grid');
