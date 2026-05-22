const fs = require('fs');
const path = require('path');

const dir = 'd:/UAV';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const textToUrl = {
    "Dịch vụ": "index.html#programs",
    "Lĩnh vực": "index.html",
    "Đào tạo bay UAV cơ bản - nâng cao": "dao-tao-cap-phep.html",
    "Sát hạch & cấp phép UAV": "sat-hach-cap-phep.html",
    "Ứng dụng UAV nông nghiệp": "ung-dung-nong-nghiep.html",
    "Khảo sát - Mapping lập bản đồ": "khao-sat-mapping.html",
    "Quay phim sự kiện - Truyền thông": "quay-phim-su-kien.html",
    "Cung cấp UAV chính hãng": "cung-cap-uav.html",
    "Khảo sát và lập bản đồ trên không": "khao-sat-va-lap-ban-do-tren-khong.html",
    "Dịch vụ lập bản đồ Orthomosaic": "dich-vu-lap-ban-do-orthomosaic.html",
    "Mô hình 3D": "mo-hinh-3d.html",
    "Dịch vụ kiểm tra mái nhà": "dich-vu-kiem-tra-mai-nha.html",
    "Dịch vụ hình ảnh nhiệt": "dich-vu-hinh-anh-nhiet.html",
    "Bất động sản Thương mại": "bat-dong-san-thuong-mai.html",
    "Nhiếp ảnh bất động sản nhà ở": "nhiep-anh-bat-dong-san-nha-o.html",
    "Lĩnh vực năng lượng": "linh-vuc-nang-luong.html",
    "Lĩnh vực xây dựng": "linh-vuc-xay-dung.html",
    "Lĩnh vực địa ốc": "linh-vuc-dia-oc.html",
    "Lĩnh vực tấm lợp": "linh-vuc-tam-lop.html",
    "Đối tác": "doi-tac.html",
    "Dự Án": "doi-tac.html",
    "Tin tức": "tin-tuc.html",
    "Hình ảnh": "tin-tuc.html",
    "Về chúng tôi": "chung-toi-la-ai.html",
    "Chúng tôi là ai": "chung-toi-la-ai.html",
    "Chúng tôi làm gì": "chung-toi-lam-gi.html"
};

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Find all breadcrumbs blocks
    const regex = /<div class="breadcrumbs">([\s\S]*?)<\/div>/g;
    
    content = content.replace(regex, (match, innerContent) => {
        // Replace spans with links
        const spanRegex = /<span>(.*?)<\/span>/g;
        const newInner = innerContent.replace(spanRegex, (spanMatch, text) => {
            const cleanText = text.trim();
            if (textToUrl[cleanText]) {
                modified = true;
                return "<a href=\"" + textToUrl[cleanText] + "\">" + text + "</a>";
            }
            return spanMatch;
        });
        return "<div class=\"breadcrumbs\">" + newInner + "</div>";
    });

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated spans to links in ' + file);
    }
});
