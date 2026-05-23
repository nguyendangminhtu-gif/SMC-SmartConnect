const fs = require('fs');
const path = require('path');

const dir = 'd:/UAV';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let filePath = path.join(dir, file);
    let c = fs.readFileSync(filePath, 'utf8');

    // Check if favicon already exists
    if (!c.includes('rel="icon"')) {
        // Insert favicon right after <head>
        c = c.replace(/<head>/i, '<head>\n    <!-- Favicon -->\n    <link rel="icon" type="image/png" href="images/logo.png">');
        fs.writeFileSync(filePath, c);
        console.log(`Updated favicon in ${file}`);
    }
});

console.log('done');
