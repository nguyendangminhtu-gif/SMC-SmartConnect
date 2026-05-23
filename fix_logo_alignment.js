const fs = require('fs');
let c = fs.readFileSync('d:/UAV/index.html', 'utf8');

c = c.replace(
    /<div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-lg group-hover:scale-105 transition-transform">\s*<img src="images\/logo.png" alt="SMC Logo" class="w-full h-full object-contain">\s*<\/div>/g,
    '<div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-lg group-hover:scale-105 transition-transform overflow-hidden">\n                            <img src="images/logo.png" alt="SMC Logo" class="w-full h-full object-contain scale-[1.35] -translate-y-1.5">\n                        </div>'
);

c = c.replace(
    /<div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1 shadow-lg">\s*<img src="images\/logo.png" alt="SMC Logo" class="w-full h-full object-contain">\s*<\/div>/g,
    '<div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1 shadow-lg overflow-hidden">\n                            <img src="images/logo.png" alt="SMC Logo" class="w-full h-full object-contain scale-[1.35] -translate-y-1">\n                        </div>'
);

// Let's also check if the first replace ran, if not we will just replace the img tags globally if they are exactly `class="w-full h-full object-contain"`
if(!c.includes('scale-[1.35]')) {
    c = c.replace(/<img src="images\/logo\.png" alt="SMC Logo" class="w-full h-full object-contain">/g, '<img src="images/logo.png" alt="SMC Logo" class="w-full h-full object-contain scale-[1.35] -translate-y-1">');
}

fs.writeFileSync('d:/UAV/index.html', c);
console.log('done');
