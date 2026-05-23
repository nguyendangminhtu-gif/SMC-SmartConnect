const fs = require('fs');
let c = fs.readFileSync('d:/UAV/index.html', 'utf8');

c = c.replace(/(<input type="tel"[^>]+>[\s\S]*?<\/div>)/, '$1\n                                <div>\n                                    <input type="email" placeholder="Email *" required\n                                        class="w-full bg-white/10 border border-white/20 text-white placeholder-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">\n                                </div>');

fs.writeFileSync('d:/UAV/index.html', c);
console.log('done');
