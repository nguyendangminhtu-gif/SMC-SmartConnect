const fs = require('fs');
let c = fs.readFileSync('d:/UAV/index.html', 'utf8');

// 1. Add overscroll-y-none to body to prevent iOS rubber band white space
c = c.replace(
    '<body class="bg-surface text-slate-800 antialiased selection:bg-primary selection:text-white overflow-x-hidden">',
    '<body class="bg-surface text-slate-800 antialiased selection:bg-primary selection:text-white overflow-x-hidden overscroll-y-none">'
);

// 2. Reduce bottom padding of footer on mobile just in case they meant the physical space
c = c.replace(
    '<footer class="bg-secondary text-slate-300 pt-20 pb-10 border-t border-slate-800">',
    '<footer class="bg-secondary text-slate-300 pt-20 pb-4 md:pb-10 border-t border-slate-800">'
);

// 3. To be absolutely sure, add a CSS rule to set html background to the footer color
if (c.includes('<style>')) {
    c = c.replace(
        '<style>',
        '<style>\n        /* Fix bottom white space on mobile */\n        html { background-color: #0f172a; }\n        body { background-color: #f8fafc; }'
    );
}

fs.writeFileSync('d:/UAV/index.html', c);
console.log('done');
