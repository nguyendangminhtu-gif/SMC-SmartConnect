const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix CSS for roadmap
html = html.replace(
    `.timeline-line {
                left: 20px;
                transform: none;
            }`,
    `.timeline-line {
                left: 24px;
                transform: translateX(-50%);
            }
            .timeline-node {
                left: 24px !important;
                transform: translateX(-50%) !important;
            }
            .timeline-text-box {
                padding-left: 60px !important;
            }`
);

// Add the class timeline-text-box to the text containers in roadmap
html = html.replace(/<div class="w-full pl-14 md:pl-0 md:w-5\/12"/g, '<div class="w-full pl-14 md:pl-0 md:w-5/12 timeline-text-box"');

// 2. Header Logo
html = html.replace(
    `<div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
                    <i class="fa-solid fa-plane-up text-xl"></i>
                </div>`,
    `<div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1 group-hover:shadow-lg transition-shadow">
                    <img src="images/logo.png" alt="SMC Logo" class="w-full h-full object-contain">
                </div>`
);

// 3. Footer Logo
html = html.replace(
    `<div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
                            <i class="fa-solid fa-plane-up"></i>
                        </div>`,
    `<div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1">
                            <img src="images/logo.png" alt="SMC Logo" class="w-full h-full object-contain">
                        </div>`
);

// 4. Team Section
const oldTeamStr = html.substring(html.indexOf('<!-- Swiper Team -->'), html.indexOf('</section>', html.indexOf('<!-- Swiper Team -->')));
const newTeamStr = `<!-- Swiper Team -->
                <div class="swiper teamSwiper pb-16" data-aos="fade-up" data-aos-delay="200">
                    <div class="swiper-wrapper">
                        <!-- Member 1 -->
                        <article class="swiper-slide h-auto">
                            <div class="bg-slate-50 rounded-3xl p-8 text-center group border border-slate-100 hover:shadow-2xl transition-all duration-300 h-full">
                                <div class="relative w-48 h-48 mx-auto mb-8 overflow-hidden rounded-full border-4 border-white shadow-xl">
                                    <img src="images/instructor_tech.png" alt="Chuyên gia Kỹ thuật" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                </div>
                                <h3 class="text-2xl font-bold text-secondary mb-1 group-hover:text-primary transition-colors">Chuyên gia Kỹ thuật</h3>
                                <p class="text-primary font-bold text-sm uppercase tracking-wide mb-4">Cố vấn vận hành UAV</p>
                                <p class="text-slate-500 text-base leading-relaxed">Nhiều năm kinh nghiệm vận hành UAV nông nghiệp & trắc địa. Chuyên gia đào tạo bay sa hình phức tạp.</p>
                            </div>
                        </article>

                        <!-- Member 2 -->
                        <article class="swiper-slide h-auto">
                            <div class="bg-slate-50 rounded-3xl p-8 text-center group border border-slate-100 hover:shadow-2xl transition-all duration-300 h-full">
                                <div class="relative w-48 h-48 mx-auto mb-8 overflow-hidden rounded-full border-4 border-white shadow-xl">
                                    <img src="images/instructor_media.png" alt="Giảng viên Media" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                </div>
                                <h3 class="text-2xl font-bold text-secondary mb-1 group-hover:text-primary transition-colors">Giảng viên Media</h3>
                                <p class="text-primary font-bold text-sm uppercase tracking-wide mb-4">Chuyên gia Quay phim trên không</p>
                                <p class="text-slate-500 text-base leading-relaxed">Kinh nghiệm thực hiện hàng trăm dự án sự kiện lớn. Hướng dẫn kỹ thuật quay phim, nhiếp ảnh bay đỉnh cao.</p>
                            </div>
                        </article>

                        <!-- Member 3 -->
                        <article class="swiper-slide h-auto">
                            <div class="bg-slate-50 rounded-3xl p-8 text-center group border border-slate-100 hover:shadow-2xl transition-all duration-300 h-full">
                                <div class="relative w-48 h-48 mx-auto mb-8 overflow-hidden rounded-full border-4 border-white shadow-xl">
                                    <img src="images/instructor_legal.png" alt="Cố vấn Pháp chế" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                </div>
                                <h3 class="text-2xl font-bold text-secondary mb-1 group-hover:text-primary transition-colors">Cố vấn Pháp chế</h3>
                                <p class="text-primary font-bold text-sm uppercase tracking-wide mb-4">Chuyên gia Pháp lý bay</p>
                                <p class="text-slate-500 text-base leading-relaxed">Đảm bảo học viên nắm rõ quy định vùng cấm bay, luật định mới nhất và hỗ trợ thủ tục cấp phép nhanh chóng.</p>
                            </div>
                        </article>
                        
                        <!-- Member 4 -->
                        <article class="swiper-slide h-auto">
                            <div class="bg-slate-50 rounded-3xl p-8 text-center group border border-slate-100 hover:shadow-2xl transition-all duration-300 h-full">
                                <div class="relative w-48 h-48 mx-auto mb-8 overflow-hidden rounded-full border-4 border-white shadow-xl">
                                    <img src="images/instructor_military.png" alt="Giảng viên Sĩ quan" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                </div>
                                <h3 class="text-2xl font-bold text-secondary mb-1 group-hover:text-primary transition-colors">Giảng viên Trường Sĩ quan</h3>
                                <p class="text-primary font-bold text-sm uppercase tracking-wide mb-4">Chuyên gia Đào tạo Bay</p>
                                <p class="text-slate-500 text-base leading-relaxed">Chuyên gia và các giảng viên của Trường Sĩ quan Không quân trực tiếp tham gia đào tạo bài bản.</p>
                            </div>
                        </article>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        `;
html = html.replace(oldTeamStr, newTeamStr);

// 5. Testimonials Section
const oldTestiStr = html.substring(html.indexOf('<div class="swiper testimonialSwiper pb-16"'), html.indexOf('</section>', html.indexOf('<div class="swiper testimonialSwiper pb-16"')));
const newTestiStr = `<div class="swiper testimonialSwiper pb-16" data-aos="fade-up" data-aos-delay="200">
                    <div class="swiper-wrapper">
                        <!-- Review 1 -->
                        <div class="swiper-slide p-4">
                            <div class="speech-bubble p-8 shadow-lg md:p-10">
                                <div class="text-amber-400 mb-6 text-xl">
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                </div>
                                <p class="text-slate-600 italic mb-2 text-lg leading-relaxed">"Trung tâm hướng dẫn rất tận tình. Nhờ có chứng chỉ của SMC mà hợp tác xã nông nghiệp của chúng tôi mới đáp ứng được điều kiện để bay rải phân bón hợp pháp, không lo bị phạt."</p>
                            </div>
                            <div class="flex items-center justify-center gap-5 mt-10">
                                <div class="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-2xl border-2 border-primary"><i class="fa-solid fa-user"></i></div>
                                <div class="text-left">
                                    <h4 class="font-bold text-secondary text-lg">Anh Hoàng Văn T.</h4>
                                    <p class="text-sm text-primary font-medium">Chủ trang trại, Đồng Tháp</p>
                                </div>
                            </div>
                        </div>

                        <!-- Review 2 -->
                        <div class="swiper-slide p-4">
                            <div class="speech-bubble p-8 shadow-lg md:p-10">
                                <div class="text-amber-400 mb-6 text-xl">
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                </div>
                                <p class="text-slate-600 italic mb-2 text-lg leading-relaxed">"Khóa học cực kỳ thực tế. Giảng viên cầm tay chỉ việc, bãi tập rộng rãi thoải mái. Nhờ đó mà bây giờ tôi đã tự tin nhận các hợp đồng quay phim sự kiện ngoài trời bằng flycam."</p>
                            </div>
                            <div class="flex items-center justify-center gap-5 mt-10">
                                <div class="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-2xl border-2 border-primary"><i class="fa-solid fa-user"></i></div>
                                <div class="text-left">
                                    <h4 class="font-bold text-secondary text-lg">Nguyễn Thành Nam</h4>
                                    <p class="text-sm text-primary font-medium">Freelancer Media, Hà Nội</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        `;
html = html.replace(oldTestiStr, newTestiStr);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Done modifying index.html');
