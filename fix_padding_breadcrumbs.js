const fs = require('fs');
const path = require('path');

const dir = 'd:/UAV';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix inline paddings
    if (content.includes('style="text-align: center; padding: 100px 0;"')) {
        content = content.replace(/style="text-align: center; padding: 100px 0;"/g, 'style="text-align: center;"');
        modified = true;
    }

    // Fix linh-vuc-*.html breadcrumbs wrap
    if (file.startsWith('linh-vuc-')) {
        const regex = /(<section class="sector-banner">\s*<div class="sector-banner-container">\s*)<div class="breadcrumbs">([\s\S]*?)<\/div>/;
        if (regex.test(content)) {
            content = content.replace(regex, '<section class="sector-banner">\n            <div class="container">\n                <div class="breadcrumbs">$2</div>\n            </div>\n            <div class="sector-banner-container">');
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated ' + file);
    }
});
