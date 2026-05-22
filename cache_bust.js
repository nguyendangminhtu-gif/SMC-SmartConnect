const fs = require('fs');
const path = require('path');

const dir = 'd:/UAV';
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Cache bust mobile-menu.js
    if (content.includes('mobile-menu.js')) {
        content = content.replace(/mobile-menu\.js(\?v=\d+)?/g, 'mobile-menu.js?v=' + Date.now());
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Cache busted mobile-menu.js in ' + file);
    }
});
