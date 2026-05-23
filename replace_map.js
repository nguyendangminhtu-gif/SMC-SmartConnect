const fs = require('fs');
const path = require('path');

const newMapHtml = `                    <!-- Google Map -->
                    <div class="w-full h-32 bg-slate-800 rounded-xl overflow-hidden relative">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119175.95551988887!2d105.69612398418086!3d21.0227361730598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b32b842a37%3A0xe91a56573e7f9a11!2zTmFtIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1716448102340!5m2!1svi!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>`;

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (dirPath.includes('node_modules') || dirPath.includes('.git')) return;
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
    });
}

function processFile(filePath) {
    const ext = path.extname(filePath);
    if (ext !== '.html' && ext !== '.ejs') return;

    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Match <!-- Simple map placeholder --> and everything up to the next </div></div> (which closes the col)
    // Wait, it's safer to just match from <!-- Simple map placeholder --> to the specific </div> containing it
    const mapRegex = /<!-- Simple map placeholder -->[\s\S]*?<div class="absolute inset-0 flex items-center justify-center">[\s\S]*?<\/div>\s*<\/div>/g;
    
    // Some files might have different formatting, let's use a more flexible regex:
    const flexibleRegex = /<!-- Simple map placeholder -->\s*<div[^>]*bg-slate-800[^>]*>[\s\S]*?Xem\s*Bản Đồ[\s\S]*?<\/div>\s*<\/div>/g;

    content = content.replace(flexibleRegex, newMapHtml);

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated map in ${filePath}`);
    }
}

walkDir('d:\\UAV', processFile);
console.log('Map replacement complete.');
