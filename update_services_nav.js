const fs = require('fs');
const path = require('path');

const dir = 'd:/UAV';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const newServicesMenu = `                    <ul class="dropdown" style="min-width: 350px;">
                        <li><a href="dao-tao-cap-phep.html">Đào tạo bay UAV cơ bản - nâng cao</a></li>
                        <li><a href="sat-hach-cap-phep.html">Sát hạch & cấp phép UAV</a></li>
                        <li><a href="ung-dung-nong-nghiep.html">Ứng dụng UAV nông nghiệp</a></li>
                        
                        <li class="dropdown-trigger-sub">
                            <a href="khao-sat-mapping.html" style="display: flex; justify-content: space-between; align-items: center;">Khảo sát - Mapping lập bản đồ <i class="fa-solid fa-chevron-right" style="font-size: 10px;"></i></a>
                            <ul class="sub-dropdown">
                                <li><a href="khao-sat-va-lap-ban-do-tren-khong.html">Khảo sát và lập bản đồ trên không</a></li>
                                <li><a href="dich-vu-lap-ban-do-orthomosaic.html">Dịch vụ lập bản đồ Orthomosaic</a></li>
                                <li><a href="mo-hinh-3d.html">Mô hình 3D</a></li>
                                <li><a href="dich-vu-kiem-tra-mai-nha.html">Dịch vụ kiểm tra mái nhà</a></li>
                                <li><a href="dich-vu-hinh-anh-nhiet.html">Dịch vụ hình ảnh nhiệt</a></li>
                            </ul>
                        </li>
                        
                        <li class="dropdown-trigger-sub">
                            <a href="quay-phim-su-kien.html" style="display: flex; justify-content: space-between; align-items: center;">Quay phim sự kiện - Truyền thông <i class="fa-solid fa-chevron-right" style="font-size: 10px;"></i></a>
                            <ul class="sub-dropdown">
                                <li><a href="bat-dong-san-thuong-mai.html">Bất động sản Thương mại</a></li>
                                <li><a href="nhiep-anh-bat-dong-san-nha-o.html">Nhiếp ảnh bất động sản nhà ở</a></li>
                            </ul>
                        </li>
                        
                        <li><a href="cung-cap-uav.html">Cung cấp UAV chính hãng</a></li>
                    </ul>`;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Finding the "Dịch vụ" li block
    const searchString = 'Dịch vụ <i class="fa-solid fa-chevron-down" style="font-size: 10px; margin-left: 5px;"></i></a>';
    const index = content.indexOf(searchString);
    if (index !== -1) {
        // Find the start of the <ul> right after
        const ulStart = content.indexOf('<ul class="dropdown"', index);
        // Find the matching </ul>
        let depth = 0;
        let ulEnd = -1;
        let p = ulStart;
        while (p < content.length) {
            if (content.substr(p, 3) === '<ul') {
                depth++;
            } else if (content.substr(p, 4) === '</ul') {
                depth--;
                if (depth === 0) {
                    ulEnd = p + 5;
                    break;
                }
            }
            p++;
        }
        
        if (ulEnd !== -1) {
            const oldUl = content.substring(ulStart, ulEnd);
            content = content.replace(oldUl, newServicesMenu);
            fs.writeFileSync(filePath, content);
            console.log(`Updated ${file}`);
        }
    }
});

console.log('Successfully updated services dropdown in all HTML files.');
