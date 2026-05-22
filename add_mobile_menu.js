const fs = require('fs');
const path = require('path');

const dir = 'd:/UAV';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Add menu-toggle if not exists
    if (!content.includes('id="mobile-menu"')) {
        content = content.replace(/(\n\s*)(<\/div>\s*<\/nav>)/, '$1    <div class="menu-toggle" id="mobile-menu"><i class="fa-solid fa-bars"></i></div>$1$2');
    }

    // Add script reference if not exists
    if (!content.includes('mobile-menu.js')) {
        content = content.replace(/(\n\s*)(<\/body>)/i, '$1    <script src="mobile-menu.js"></script>$1$2');
    }

    fs.writeFileSync(filePath, content);
});

console.log('Successfully updated HTML files with mobile menu HTML and JS link.');
