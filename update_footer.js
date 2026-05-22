const fs = require('fs');
const path = require('path');

const dir = 'd:/UAV';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const newFooter = `    <footer id="contact">
        <div class="container footer-grid">
            <div class="footer-col">
                <div class="footer-logo-wrapper">
                    <div class="footer-logo-bg">
                        <img src="images/logo.png" alt="SMC Logo" class="footer-logo-img">
                    </div>
                    <h4 class="footer-logo-text">SMC SmartConnect</h4>
                </div>
                <p class="copyright">© 2024 Công ty TNHH Công nghệ Smartconnect. Tất cả quyền được bảo lưu.</p>
            </div>
            <div class="footer-col">
                <h5>TRUNG TÂM ĐÀO TẠO SMC</h5>
                <ul class="contact-list">
                    <li><i class="fa-solid fa-phone"></i> <span><strong>Hotline:</strong> 1900 638 939 (Nhánh 2)</span></li>
                    <li><i class="fa-solid fa-mobile-screen"></i> <span><strong>SĐT:</strong> 0902 596 999</span></li>
                    <li><i class="fa-solid fa-envelope"></i> <span><strong>Kinh doanh:</strong> sales@smartconnect.com.vn</span></li>
                    <li><i class="fa-solid fa-envelope"></i> <span><strong>Đào tạo:</strong> ktsmc.coltd@gmail.com</span></li>
                </ul>
            </div>
            <div class="footer-col">
                <h5>MẠNG XÃ HỘI & LIÊN KẾT</h5>
                <ul class="social-links">
                    <li><a href="https://smartconnect.com.vn/" target="_blank"><i class="fa-solid fa-globe"></i> Website Công Ty</a></li>
                    <li><a href="#"><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                    <li><a href="#"><i class="fa-solid fa-comment-dots"></i> Zalo</a></li>
                </ul>
            </div>
        </div>
    </footer>`;

let updatedCount = 0;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    const startIdx = content.indexOf('<footer id="contact">');
    if (startIdx !== -1) {
        const endStr = '</footer>';
        const endIdx = content.indexOf(endStr, startIdx);
        if (endIdx !== -1) {
            const oldFooter = content.substring(startIdx, endIdx + endStr.length);
            
            // Normalize spacing/newlines to check if different
            const normalize = str => str.replace(/\s+/g, ' ').trim();
            
            if (normalize(oldFooter) !== normalize(newFooter)) {
                content = content.substring(0, startIdx) + newFooter + content.substring(endIdx + endStr.length);
                fs.writeFileSync(filePath, content);
                console.log(`Updated footer in ${file}`);
                updatedCount++;
            }
        }
    }
});

console.log(`Successfully updated footer in ${updatedCount} HTML files.`);
