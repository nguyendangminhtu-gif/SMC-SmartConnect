const fs = require('fs');
const path = require('path');

const newFontUrl = 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800;900&display=swap';
const newFontFamily = "'Be Vietnam Pro', sans-serif";

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (dirPath.includes('node_modules') || dirPath.includes('.git') || dirPath.includes('cms-backend\\node_modules')) return;
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
    });
}

function processFile(filePath) {
    const ext = path.extname(filePath);
    if (ext !== '.html' && ext !== '.css' && ext !== '.ejs') return;

    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    if (ext === '.html' || ext === '.ejs') {
        // Replace google fonts URL
        content = content.replace(/https:\/\/fonts\.googleapis\.com\/css2\?[^"']*/g, newFontUrl);
    }

    if (ext === '.css' || ext === '.html' || ext === '.ejs') {
        // Replace font families
        content = content.replace(/'Inter',\s*sans-serif/g, newFontFamily);
        content = content.replace(/"Inter",\s*sans-serif/g, newFontFamily);
        content = content.replace(/'Playfair Display',\s*serif/g, newFontFamily);
        content = content.replace(/"Playfair Display",\s*serif/g, newFontFamily);
        content = content.replace(/'Playfair Display',\s*'Georgia',\s*serif/g, newFontFamily);
        content = content.replace(/"Playfair Display",\s*"Georgia",\s*serif/g, newFontFamily);
        content = content.replace(/font-family:\s*inherit;/g, `font-family: inherit;`); // no change
        // Let's also catch any naked 'Inter' or 'Playfair Display'
        content = content.replace(/font-family:\s*Inter;/g, `font-family: ${newFontFamily};`);
        content = content.replace(/font-family:\s*['"]?Outfit['"]?,\s*sans-serif;/g, `font-family: ${newFontFamily};`);
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated fonts in ${filePath}`);
    }
}

walkDir('d:\\UAV', processFile);
console.log('Font replacement complete.');
