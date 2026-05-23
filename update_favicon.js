const fs = require('fs');
const path = require('path');

const dir = 'd:/UAV';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let filePath = path.join(dir, file);
    let c = fs.readFileSync(filePath, 'utf8');

    if (c.includes('rel="icon"') && c.includes('images/logo.png')) {
        // Replace logo.png with favicon.png in the favicon link
        c = c.replace(/<link rel="icon" type="image\/png" href="images\/logo\.png">/g, '<link rel="icon" type="image/png" href="images/favicon.png">');
        fs.writeFileSync(filePath, c);
        console.log(`Updated favicon source in ${file}`);
    }
});

console.log('done');
