const fs = require('fs');
let c = fs.readFileSync('d:/UAV/index.html', 'utf8');

c = c.replace(
    '<div class="text-2xl md:text-3xl font-black text-white mb-1">100%</div>\n                            <div class="text-[10px] md:text-sm text-slate-400 uppercase tracking-wider whitespace-nowrap">Đỗ chứng chỉ</div>',
    '<div class="text-xl md:text-2xl font-black text-white mb-1">Tỷ lệ đỗ</div>\n                            <div class="text-[10px] md:text-sm text-slate-400 uppercase tracking-wider whitespace-nowrap">Mức cao</div>'
);

// If the above replace didn't match perfectly, let's try a regex
c = c.replace(/<div class="text-2xl md:text-3xl font-black text-white mb-1">100%<\/div>\s*<div class="text-\[10px\] md:text-sm text-slate-400 uppercase tracking-wider whitespace-nowrap">Đỗ chứng chỉ<\/div>/g, 
    '<div class="text-xl md:text-2xl font-black text-white mb-1 whitespace-nowrap">Tỷ lệ đỗ</div>\n                            <div class="text-[10px] md:text-sm text-slate-400 uppercase tracking-wider whitespace-nowrap">Cao</div>'
);

fs.writeFileSync('d:/UAV/index.html', c);
console.log('done');
