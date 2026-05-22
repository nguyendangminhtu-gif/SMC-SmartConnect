const fs = require('fs');
const path = require('path');

const dir = 'd:/UAV';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const searchStr = `                        <li><a href="linh-vuc-nang-luong.html">Lĩnh vực Năng lượng</a></li>
                    </ul>
                </li>`;

const replaceStr = `                        <li><a href="linh-vuc-nang-luong.html">Lĩnh vực Năng lượng</a></li>
                    </ul>
                </li>
                <li class="dropdown-trigger">
                    <a href="#">Dịch vụ <i class="fa-solid fa-chevron-down" style="font-size: 10px; margin-left: 5px;"></i></a>
                    <ul class="dropdown" style="min-width: 350px;">
                        <li><a href="quay-phim-su-kien.html">Chụp ảnh bằng máy bay không người lái</a></li>
                        <li><a href="khao-sat-mapping.html">Dịch vụ khảo sát địa hình bằng máy bay không người lái</a></li>
                        <li><a href="quay-phim-su-kien.html">Quay video bằng máy bay không người lái</a></li>
                        <li><a href="linh-vuc-dia-oc.html">Kiểm tra tài sản bằng máy bay không người lái</a></li>
                        <li><a href="khao-sat-mapping.html">Bản đồ 3D</a></li>
                        <li><a href="ung-dung-nong-nghiep.html">Dịch vụ nông nghiệp sử dụng máy bay không người lái</a></li>
                    </ul>
                </li>`;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    const normSearch = searchStr.replace(/\r\n/g, '\n');
    const normContent = content.replace(/\r\n/g, '\n');
    
    if (normContent.includes(normSearch)) {
        const newContent = normContent.replace(normSearch, replaceStr.replace(/\r\n/g, '\n'));
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('Updated ' + file);
    } else {
        console.log('Not found in ' + file);
    }
});
