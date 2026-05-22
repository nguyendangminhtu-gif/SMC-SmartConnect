const fs = require('fs');
const path = require('path');

const dir = 'd:/UAV';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<li><a href="doi-tac.html">Đối tác</a></li>')) {
        content = content.replace(/<li><a href="doi-tac.html">Đối tác<\/a><\/li>/g, '<li><a href="doi-tac.html">Dự án & Đối tác</a></li>');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated nav in ' + file);
    }
});
