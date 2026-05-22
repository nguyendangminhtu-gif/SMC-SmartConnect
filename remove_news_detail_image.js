const fs = require('fs');
const path = require('path');

const dir = 'd:/UAV';
const files = fs.readdirSync(dir).filter(f => f.startsWith('tin-tuc-') && f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // The image tag looks like: <img src="images/news-X.png?v=2" alt="..." class="news-detail-image">
    // Let's remove it.
    const imageRegex = /<img[^>]*class="news-detail-image"[^>]*>\s*/;
    if (imageRegex.test(content)) {
        content = content.replace(imageRegex, '');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Removed image from ' + file);
    }
});
