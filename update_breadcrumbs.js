const fs = require('fs');
const path = require('path');

const dir = 'd:/UAV';

const updates = {
    'dao-tao-cap-phep.html': `            <div class="breadcrumbs">
                <a href="index.html">Trang chủ</a>
                <i class="fa-solid fa-chevron-right"></i>
                <span>Dịch vụ</span>
                <i class="fa-solid fa-chevron-right"></i>
                <span>Đào tạo bay UAV cơ bản - nâng cao</span>
            </div>`,
            
    'sat-hach-cap-phep.html': `            <div class="breadcrumbs">
                <a href="index.html">Trang chủ</a>
                <i class="fa-solid fa-chevron-right"></i>
                <span>Dịch vụ</span>
                <i class="fa-solid fa-chevron-right"></i>
                <span>Sát hạch & cấp phép UAV</span>
            </div>`,

    'ung-dung-nong-nghiep.html': `            <div class="breadcrumbs">
                <a href="index.html">Trang chủ</a>
                <i class="fa-solid fa-chevron-right"></i>
                <span>Dịch vụ</span>
                <i class="fa-solid fa-chevron-right"></i>
                <span>Ứng dụng UAV nông nghiệp</span>
            </div>`,

    'khao-sat-mapping.html': `                <div class="breadcrumbs">
                    <a href="index.html">Trang chủ</a>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Dịch vụ</span>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Khảo sát - Mapping lập bản đồ</span>
                </div>`,

    'quay-phim-su-kien.html': `            <div class="breadcrumbs">
                <a href="index.html">Trang chủ</a>
                <i class="fa-solid fa-chevron-right"></i>
                <span>Dịch vụ</span>
                <i class="fa-solid fa-chevron-right"></i>
                <span>Quay phim sự kiện - Truyền thông</span>
            </div>`,

    'cung-cap-uav.html': `            <div class="breadcrumbs">
                <a href="index.html">Trang chủ</a>
                <i class="fa-solid fa-chevron-right"></i>
                <span>Dịch vụ</span>
                <i class="fa-solid fa-chevron-right"></i>
                <span>Cung cấp UAV chính hãng</span>
            </div>`,

    'khao-sat-va-lap-ban-do-tren-khong.html': `                <div class="breadcrumbs">
                    <a href="index.html">Trang chủ</a>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Dịch vụ</span>
                    <i class="fa-solid fa-chevron-right"></i>
                    <a href="khao-sat-mapping.html">Khảo sát - Mapping lập bản đồ</a>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Khảo sát và lập bản đồ trên không</span>
                </div>`,

    'dich-vu-lap-ban-do-orthomosaic.html': `                <div class="breadcrumbs">
                    <a href="index.html">Trang chủ</a>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Dịch vụ</span>
                    <i class="fa-solid fa-chevron-right"></i>
                    <a href="khao-sat-mapping.html">Khảo sát - Mapping lập bản đồ</a>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Dịch vụ lập bản đồ Orthomosaic</span>
                </div>`,

    'mo-hinh-3d.html': `                <div class="breadcrumbs">
                    <a href="index.html">Trang chủ</a>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Dịch vụ</span>
                    <i class="fa-solid fa-chevron-right"></i>
                    <a href="khao-sat-mapping.html">Khảo sát - Mapping lập bản đồ</a>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Mô hình 3D</span>
                </div>`,

    'dich-vu-kiem-tra-mai-nha.html': `                <div class="breadcrumbs">
                    <a href="index.html">Trang chủ</a>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Dịch vụ</span>
                    <i class="fa-solid fa-chevron-right"></i>
                    <a href="khao-sat-mapping.html">Khảo sát - Mapping lập bản đồ</a>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Dịch vụ kiểm tra mái nhà</span>
                </div>`,

    'dich-vu-hinh-anh-nhiet.html': `                <div class="breadcrumbs">
                    <a href="index.html">Trang chủ</a>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Dịch vụ</span>
                    <i class="fa-solid fa-chevron-right"></i>
                    <a href="khao-sat-mapping.html">Khảo sát - Mapping lập bản đồ</a>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Dịch vụ hình ảnh nhiệt</span>
                </div>`,

    'bat-dong-san-thuong-mai.html': `                <div class="breadcrumbs">
                    <a href="index.html">Trang chủ</a>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Dịch vụ</span>
                    <i class="fa-solid fa-chevron-right"></i>
                    <a href="quay-phim-su-kien.html">Quay phim sự kiện - Truyền thông</a>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Bất động sản Thương mại</span>
                </div>`,

    'nhiep-anh-bat-dong-san-nha-o.html': `                <div class="breadcrumbs">
                    <a href="index.html">Trang chủ</a>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Dịch vụ</span>
                    <i class="fa-solid fa-chevron-right"></i>
                    <a href="quay-phim-su-kien.html">Quay phim sự kiện - Truyền thông</a>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Nhiếp ảnh bất động sản nhà ở</span>
                </div>`
};

for (const [file, newBreadcrumb] of Object.entries(updates)) {
    const filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    const startIdx = content.indexOf('<div class="breadcrumbs">');
    if (startIdx !== -1) {
        const endStr = '</div>';
        const endIdx = content.indexOf(endStr, startIdx);
        if (endIdx !== -1) {
            const oldBreadcrumb = content.substring(startIdx, endIdx + endStr.length);
            content = content.replace(oldBreadcrumb, newBreadcrumb);
            fs.writeFileSync(filePath, content);
            console.log("Updated " + file);
        }
    }
}
