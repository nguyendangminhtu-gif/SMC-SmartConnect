const fs = require('fs');
const path = require('path');

const dir = 'd:/UAV';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace <div class="logo"> with <a href="index.html" class="logo">
    const logoRegex = /<div class="logo">([\s\S]*?)<\/div>/g;
    
    let modified = false;
    content = content.replace(logoRegex, (match, inner) => {
        if (inner.includes('nav-logo-img') || inner.includes('SMC SmartConnect')) {
            modified = true;
            return `<a href="index.html" class="logo">${inner}</a>`;
        }
        return match;
    });

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed logo link in ' + file);
    }
});
