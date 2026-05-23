const fs = require('fs');
let c = fs.readFileSync('d:/UAV/index.html', 'utf8');

const oldStr = '<div class="text-2xl md:text-3xl font-black text-white mb-1 whitespace-nowrap">Cam kết</div>\n                            <div class="text-[10px] md:text-sm text-slate-400 uppercase tracking-wider whitespace-nowrap">Tỷ lệ thi đỗ</div>';
const newStr = '<div class="text-xl md:text-2xl font-black text-white mb-1 whitespace-nowrap">Tỷ lệ đỗ cao</div>\n                            <div class="text-[10px] md:text-sm text-transparent select-none uppercase tracking-wider whitespace-nowrap">.</div>';

if(c.includes(oldStr)) {
    c = c.replace(oldStr, newStr);
} else {
    // regex fallback
    c = c.replace(/<div class="text-2xl md:text-3xl font-black text-white mb-1 whitespace-nowrap">Cam kết<\/div>\s*<div class="text-\[10px\] md:text-sm text-slate-400 uppercase tracking-wider whitespace-nowrap">Tỷ lệ thi đỗ<\/div>/g, newStr);
}

fs.writeFileSync('d:/UAV/index.html', c);
console.log('done');
