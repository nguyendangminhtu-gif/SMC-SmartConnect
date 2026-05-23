const fs = require('fs');
const path = require('path');

const newFontFamily = 'Be Vietnam Pro';

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
    if (ext !== '.html' && ext !== '.ejs') return;

    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/sans:\s*\['Inter',\s*'sans-serif'\]/g, `sans: ['${newFontFamily}', 'sans-serif']`);
    content = content.replace(/heading:\s*\['Outfit',\s*'sans-serif'\]/g, `heading: ['${newFontFamily}', 'sans-serif']`);
    
    // Also catch variants with double quotes
    content = content.replace(/sans:\s*\["Inter",\s*"sans-serif"\]/g, `sans: ['${newFontFamily}', 'sans-serif']`);
    content = content.replace(/heading:\s*\["Outfit",\s*"sans-serif"\]/g, `heading: ['${newFontFamily}', 'sans-serif']`);

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated tailwind fonts in ${filePath}`);
    }
}

walkDir('d:\\UAV', processFile);
console.log('Tailwind font replacement complete.');
