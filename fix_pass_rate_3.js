const fs = require('fs');
let c = fs.readFileSync('d:/UAV/index.html', 'utf8');

// Replace the previous 98%+ update
c = c.replace(
    '<div class="text-2xl md:text-3xl font-black text-white mb-1">98%+</div>\n                            <div class="text-[10px] md:text-sm text-slate-400 uppercase tracking-wider whitespace-nowrap">Tỷ lệ đỗ</div>',
    '<div class="text-2xl md:text-3xl font-black text-white mb-1 whitespace-nowrap">Cam kết</div>\n                            <div class="text-[10px] md:text-sm text-slate-400 uppercase tracking-wider whitespace-nowrap">Tỷ lệ thi đỗ</div>'
);

// Fallback in case it doesn't match
c = c.replace(/<div class="text-2xl md:text-3xl font-black text-white mb-1">98%\+<\/div>\s*<div class="text-\[10px\] md:text-sm text-slate-400 uppercase tracking-wider whitespace-nowrap">Tỷ lệ đỗ<\/div>/g, 
    '<div class="text-2xl md:text-3xl font-black text-white mb-1 whitespace-nowrap">Cam kết</div>\n                            <div class="text-[10px] md:text-sm text-slate-400 uppercase tracking-wider whitespace-nowrap">Tỷ lệ thi đỗ</div>'
);

fs.writeFileSync('d:/UAV/index.html', c);
console.log('done');
