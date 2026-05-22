const fs = require('fs');
const path = require('path');

const dir = 'd:/UAV';
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const errors = [];

htmlFiles.forEach(file => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Check for broken links
    const linkRegex = /href="([^"]+)"/g;
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
        const link = match[1];
        if (link.startsWith('http') || link.startsWith('tel:') || link.startsWith('mailto:') || link.startsWith('#')) {
            continue; // Skip external, phone, email, and anchor links
        }
        const targetPath = link.split('#')[0].split('?')[0]; // Remove hash and query
        if (targetPath) {
            const absolutePath = path.join(dir, targetPath);
            if (!fs.existsSync(absolutePath)) {
                errors.push(`[${file}] Broken link: ${link} -> File ${targetPath} does not exist.`);
            }
        }
    }

    // 2. Check for broken images/scripts
    const srcRegex = /src="([^"]+)"/g;
    while ((match = srcRegex.exec(content)) !== null) {
        const src = match[1];
        if (src.startsWith('http')) {
            continue;
        }
        const targetPath = src.split('?')[0]; // Remove query like ?v=2
        if (targetPath) {
            const absolutePath = path.join(dir, targetPath);
            if (!fs.existsSync(absolutePath)) {
                errors.push(`[${file}] Broken resource (img/script): ${src} -> File ${targetPath} does not exist.`);
            }
        }
    }

    // 3. Check Logo structure
    if (content.includes('<div class="logo">')) {
        errors.push(`[${file}] Warning: Logo is inside a <div> instead of <a> tag.`);
    }

    // 4. Check multiple DOCTYPEs or HTML/BODY tags (indicates duplicated content)
    const doctypeMatches = content.match(/<!DOCTYPE html>/gi);
    if (doctypeMatches && doctypeMatches.length > 1) {
        errors.push(`[${file}] Critical Error: Multiple <!DOCTYPE html> declarations found. File might be duplicated/corrupted.`);
    }
    const htmlMatches = content.match(/<html/gi);
    if (htmlMatches && htmlMatches.length > 1) {
        errors.push(`[${file}] Critical Error: Multiple <html> tags found.`);
    }
    
    // 5. Check Footer ID/Class consistency
    if (!content.includes('<footer id="contact">') && !content.includes('<footer class="footer">')) {
        errors.push(`[${file}] Warning: Missing standard footer structure.`);
    }

    // 6. Check Mobile Menu Script
    if (!content.includes('mobile-menu.js')) {
        errors.push(`[${file}] Warning: Missing mobile-menu.js script.`);
    }
});

fs.writeFileSync('d:/UAV/test_report.txt', errors.join('\n'), 'utf8');
console.log('Testing complete. Found ' + errors.length + ' issues.');
