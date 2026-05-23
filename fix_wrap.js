const fs = require('fs');
let c = fs.readFileSync('d:/UAV/index.html', 'utf8');

c = c.replace('text-5xl md:text-6xl lg:text-7xl', 'text-[1.8rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl');
c = c.replace(/id="typed-text"\s+class="/, 'id="typed-text"\n                            class="whitespace-nowrap ');

fs.writeFileSync('d:/UAV/index.html', c);
console.log('done');
