import os
import glob

html_files = glob.glob('d:/UAV/*.html')

search_str = '''                        <li><a href="linh-vuc-nang-luong.html">Lĩnh vực Năng lượng</a></li>
                    </ul>
                </li>'''

replace_str = '''                        <li><a href="linh-vuc-nang-luong.html">Lĩnh vực Năng lượng</a></li>
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
                </li>'''

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # handle different line endings by normalizing both
    norm_search = search_str.replace('\r\n', '\n')
    norm_content = content.replace('\r\n', '\n')
    
    if norm_search in norm_content:
        new_content = norm_content.replace(norm_search, replace_str.replace('\r\n', '\n'))
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_path}")
    else:
        print(f"Not found in {file_path}")

