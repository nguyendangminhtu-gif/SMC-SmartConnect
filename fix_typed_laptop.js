const fs = require('fs');
let c = fs.readFileSync('d:/UAV/index.html', 'utf8');

c = c.replace(/<h1 class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-tight mb-6">/g, '<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight mb-6">');

c = c.replace(/<span id="typed-text"[\s\S]*?class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-300"><\/span>/g, '<span id="typed-text" class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-300 whitespace-nowrap"></span>');

fs.writeFileSync('d:/UAV/index.html', c);
console.log('done');
