const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The Exact replacement blocks for the 4 service links
const link1Old = `<a href="#"
                                class="inline-flex items-center text-blue-600 font-bold group-hover:text-white transition-colors">
                                Xem chi tiết <i
                                    class="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i>
                            </a>`;
const link1New = `<a href="#" onclick="openModal('modal-service-1'); return false;"
                                class="inline-flex items-center text-blue-600 font-bold group-hover:text-white transition-colors">
                                Xem chi tiết <i
                                    class="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i>
                            </a>`;

const link2Old = `<a href="#"
                                class="inline-flex items-center text-emerald-500 font-bold group-hover:text-white transition-colors">
                                Xem chi tiết <i
                                    class="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i>
                            </a>`;
const link2New = `<a href="#" onclick="openModal('modal-service-2'); return false;"
                                class="inline-flex items-center text-emerald-500 font-bold group-hover:text-white transition-colors">
                                Xem chi tiết <i
                                    class="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i>
                            </a>`;

const link3Old = `<a href="#"
                                class="inline-flex items-center text-amber-500 font-bold group-hover:text-white transition-colors">
                                Xem chi tiết <i
                                    class="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i>
                            </a>`;
const link3New = `<a href="#" onclick="openModal('modal-service-3'); return false;"
                                class="inline-flex items-center text-amber-500 font-bold group-hover:text-white transition-colors">
                                Xem chi tiết <i
                                    class="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i>
                            </a>`;

const link4Old = `<a href="#"
                                class="inline-flex items-center text-purple-500 font-bold group-hover:text-white transition-colors">
                                Xem chi tiết <i
                                    class="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i>
                            </a>`;
const link4New = `<a href="#" onclick="openModal('modal-service-4'); return false;"
                                class="inline-flex items-center text-purple-500 font-bold group-hover:text-white transition-colors">
                                Xem chi tiết <i
                                    class="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i>
                            </a>`;

html = html.replace(link1Old, link1New);
html = html.replace(link2Old, link2New);
html = html.replace(link3Old, link3New);
html = html.replace(link4Old, link4New);

// Insert Modals HTML
const modalsHtml = `
    <!-- Modals -->
    <!-- Modal 1: Đào Tạo -->
    <div id="modal-service-1" class="fixed inset-0 z-[100] hidden items-center justify-center">
        <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="closeModal('modal-service-1')"></div>
        <div class="bg-white rounded-3xl p-8 max-w-lg w-full mx-4 relative z-10 shadow-2xl transform scale-95 opacity-0 transition-all duration-300" id="modal-content-1">
            <button onclick="closeModal('modal-service-1')" class="absolute top-4 right-4 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors">
                <i class="fa-solid fa-xmark text-xl"></i>
            </button>
            <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
                <i class="fa-solid fa-graduation-cap"></i>
            </div>
            <h3 class="font-heading text-3xl font-bold text-secondary mb-4">Đào Tạo & Cấp Chứng Chỉ</h3>
            <div class="text-slate-600 space-y-4 leading-relaxed">
                <p>Khóa học đào tạo phi công UAV chuyên nghiệp được thiết kế theo tiêu chuẩn cao nhất. Học viên sẽ được trang bị đầy đủ kiến thức pháp luật hàng không và kỹ năng điều khiển thiết bị thực tế.</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li>Đào tạo lý thuyết bay, an toàn bay và quy định pháp luật.</li>
                    <li>Thực hành trên phần mềm mô phỏng (Simulator).</li>
                    <li>Thực hành bay thực tế với các dòng Drone mới nhất (DJI Mavic, Matrice...).</li>
                    <li>Hỗ trợ làm hồ sơ sát hạch cấp chứng chỉ điều khiển UAV hợp pháp.</li>
                </ul>
                <p class="font-bold text-secondary pt-2">Thời gian học: 2 - 4 tuần (tùy cấp độ).</p>
            </div>
            <div class="mt-8">
                <a href="#register" onclick="closeModal('modal-service-1')" class="inline-block px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30">Đăng ký tư vấn</a>
            </div>
        </div>
    </div>

    <!-- Modal 2: Nông Nghiệp -->
    <div id="modal-service-2" class="fixed inset-0 z-[100] hidden items-center justify-center">
        <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="closeModal('modal-service-2')"></div>
        <div class="bg-white rounded-3xl p-8 max-w-lg w-full mx-4 relative z-10 shadow-2xl transform scale-95 opacity-0 transition-all duration-300" id="modal-content-2">
            <button onclick="closeModal('modal-service-2')" class="absolute top-4 right-4 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors">
                <i class="fa-solid fa-xmark text-xl"></i>
            </button>
            <div class="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center text-3xl mb-6">
                <i class="fa-solid fa-leaf"></i>
            </div>
            <h3 class="font-heading text-3xl font-bold text-secondary mb-4">Nông Nghiệp Thông Minh</h3>
            <div class="text-slate-600 space-y-4 leading-relaxed">
                <p>Ứng dụng công nghệ Drone đa phổ vào canh tác nông nghiệp, giúp tiết kiệm chi phí, tăng năng suất và bảo vệ môi trường cũng như sức khỏe người nông dân.</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li>Phun thuốc bảo vệ thực vật tự động, đồng đều, tiết kiệm 30% thuốc và 90% nước.</li>
                    <li>Rải phân bón, gieo hạt giống nhanh chóng trên diện tích rộng.</li>
                    <li>Sử dụng camera đa phổ để quét và phân tích sức khỏe cây trồng.</li>
                    <li>Lập bản đồ nông nghiệp, theo dõi sự phát triển của mùa màng.</li>
                </ul>
            </div>
            <div class="mt-8">
                <a href="#register" onclick="closeModal('modal-service-2')" class="inline-block px-8 py-3 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/30">Nhận báo giá dịch vụ</a>
            </div>
        </div>
    </div>

    <!-- Modal 3: Khảo sát -->
    <div id="modal-service-3" class="fixed inset-0 z-[100] hidden items-center justify-center">
        <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="closeModal('modal-service-3')"></div>
        <div class="bg-white rounded-3xl p-8 max-w-lg w-full mx-4 relative z-10 shadow-2xl transform scale-95 opacity-0 transition-all duration-300" id="modal-content-3">
            <button onclick="closeModal('modal-service-3')" class="absolute top-4 right-4 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors">
                <i class="fa-solid fa-xmark text-xl"></i>
            </button>
            <div class="w-16 h-16 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center text-3xl mb-6">
                <i class="fa-solid fa-map-location-dot"></i>
            </div>
            <h3 class="font-heading text-3xl font-bold text-secondary mb-4">Khảo Sát & Mapping 3D</h3>
            <div class="text-slate-600 space-y-4 leading-relaxed">
                <p>Giải pháp đo đạc trắc địa và khảo sát địa hình bằng UAV (công nghệ RTK/PPK), mang lại độ chính xác cỡ centimet trong thời gian ngắn nhất.</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li>Thành lập bản đồ trực giao (Orthomosaic 2D).</li>
                    <li>Xây dựng mô hình số độ cao (DEM, DTM, DSM).</li>
                    <li>Dựng mô hình 3D cho các công trình, di sản, hoặc khu đô thị.</li>
                    <li>Khảo sát tuyến đường dây điện, kiểm tra định kỳ công trình công nghiệp.</li>
                </ul>
            </div>
            <div class="mt-8">
                <a href="#register" onclick="closeModal('modal-service-3')" class="inline-block px-8 py-3 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/30">Đăng ký tư vấn</a>
            </div>
        </div>
    </div>

    <!-- Modal 4: Media -->
    <div id="modal-service-4" class="fixed inset-0 z-[100] hidden items-center justify-center">
        <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="closeModal('modal-service-4')"></div>
        <div class="bg-white rounded-3xl p-8 max-w-lg w-full mx-4 relative z-10 shadow-2xl transform scale-95 opacity-0 transition-all duration-300" id="modal-content-4">
            <button onclick="closeModal('modal-service-4')" class="absolute top-4 right-4 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors">
                <i class="fa-solid fa-xmark text-xl"></i>
            </button>
            <div class="w-16 h-16 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center text-3xl mb-6">
                <i class="fa-solid fa-video"></i>
            </div>
            <h3 class="font-heading text-3xl font-bold text-secondary mb-4">Quay Phim & Media Sự Kiện</h3>
            <div class="text-slate-600 space-y-4 leading-relaxed">
                <p>Đội ngũ phi công dày dặn kinh nghiệm cùng các dòng thiết bị bay chuyên dụng (Inspire 3, Mavic 3 Pro...) để bắt trọn những khung hình trên không ngoạn mục nhất.</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li>Quay phim điện ảnh, MV ca nhạc, và TVC quảng cáo bằng Flycam (chuẩn 4K/8K).</li>
                    <li>Livestream trên không cho các sự kiện thể thao, lễ hội ngoài trời.</li>
                    <li>Chụp ảnh toàn cảnh (Panorama 360 độ) cho dự án bất động sản, resort.</li>
                    <li>Hỗ trợ làm thủ tục xin cấp phép bay quay phim hợp pháp.</li>
                </ul>
            </div>
            <div class="mt-8">
                <a href="#register" onclick="closeModal('modal-service-4')" class="inline-block px-8 py-3 bg-purple-500 text-white font-bold rounded-xl hover:bg-purple-600 transition-colors shadow-lg shadow-purple-500/30">Xem các dự án mẫu</a>
            </div>
        </div>
    </div>
    
    <!-- Footer -->`;

if (!html.includes('id="modal-service-1"')) {
    html = html.replace('<!-- Footer -->', modalsHtml);
}

// Insert JS Logic
const jsLogic = `
        // Modals Logic
        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            const content = document.getElementById(modalId.replace('modal-service-', 'modal-content-'));
            if(modal && content) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                setTimeout(() => {
                    content.classList.remove('scale-95', 'opacity-0');
                    content.classList.add('scale-100', 'opacity-100');
                }, 10);
                document.body.style.overflow = 'hidden';
            }
        }

        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            const content = document.getElementById(modalId.replace('modal-service-', 'modal-content-'));
            if(modal && content) {
                content.classList.remove('scale-100', 'opacity-100');
                content.classList.add('scale-95', 'opacity-0');
                setTimeout(() => {
                    modal.classList.remove('flex');
                    modal.classList.add('hidden');
                    document.body.style.overflow = '';
                }, 300);
            }
        }
        
        // Mobile Menu Toggle`;

if (!html.includes('function openModal')) {
    html = html.replace('// Mobile Menu Toggle', jsLogic);
}

fs.writeFileSync('index.html', html);
console.log('Modals added SAFELY!');
