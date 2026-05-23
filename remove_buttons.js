const fs = require('fs');

const filePath = 'd:/UAV/index.html';
let content = fs.readFileSync(filePath, 'utf8');

// The problematic lines from lines 803 to 810 currently look like this in the file:
//                            class="team-prev w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-colors">
//                            <i class="fa-solid fa-arrow-left"></i>
//                        </button>
//                        <button
//                            class="team-next w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-colors">
//                            <i class="fa-solid fa-arrow-right"></i>
//                        </button>
//                    </div>

// But wait, the previous replace added:
//                    <div class="flex gap-4">
//                        <button

// Let's just use regex to remove everything between <div class="max-w-2xl" ... </div> and <div class="swiper teamSwiper pb-12"

const regex = /(<h2 class="text-4xl md:text-5xl font-heading font-bold text-secondary">Đội Ngũ Hàng Đầu<\/h2>\s*<\/div>)[\s\S]*?(<div class="swiper teamSwiper pb-12")/g;

content = content.replace(regex, '$1\n                </div>\n\n                $2');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed buttons in index.html');
