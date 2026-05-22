const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix Testimonials Section
const testimonialsStart = html.indexOf('<!-- Testimonials Section -->');
const testimonialsEnd = html.indexOf('</section>', testimonialsStart) + 10;

const newTestimonials = `<!-- Testimonials Section -->
        <section id="testimonials" class="py-24 bg-blue-50">
            <div class="container mx-auto px-4 md:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                    <span class="text-primary font-bold tracking-wider uppercase text-sm">Đánh Giá Từ Học Viên</span>
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mt-2 mb-4">Hàng Ngàn Người Đã Thành Công</h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16" data-aos="fade-up" data-aos-delay="200">
                    <!-- Review 1 -->
                    <div class="p-4 h-full flex flex-col">
                        <div class="speech-bubble p-8 shadow-lg md:p-10 flex-grow">
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
                    <div class="p-4 h-full flex flex-col">
                        <div class="speech-bubble p-8 shadow-lg md:p-10 flex-grow">
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

                    <!-- Review 3 -->
                    <div class="p-4 h-full flex flex-col">
                        <div class="speech-bubble p-8 shadow-lg md:p-10 flex-grow">
                            <div class="text-amber-400 mb-6 text-xl">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </div>
                            <p class="text-slate-600 italic mb-2 text-lg leading-relaxed">"Chương trình học bài bản, đặc biệt phần hướng dẫn sử dụng phần mềm và lập bản đồ 3D rất chi tiết. Chứng chỉ do SMC cấp giúp công ty chúng tôi thuận lợi trúng thầu nhiều dự án khảo sát trắc địa."</p>
                        </div>
                        <div class="flex items-center justify-center gap-5 mt-10">
                            <div class="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-2xl border-2 border-primary"><i class="fa-solid fa-user"></i></div>
                            <div class="text-left">
                                <h4 class="font-bold text-secondary text-lg">Trần Văn Bình</h4>
                                <p class="text-sm text-primary font-medium">Kỹ sư Trắc địa, TP.HCM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

html = html.substring(0, testimonialsStart) + newTestimonials + html.substring(testimonialsEnd);

// 2. Fix Floating Buttons
const floatingStart = html.indexOf('<!-- Floating Contact Buttons -->');
const floatingEnd = html.indexOf('</div>', html.indexOf('<!-- Hotline Button -->', floatingStart)) + 6;

const newFloating = `<!-- Floating Contact Buttons -->
    <div class="floating-contact">
        <!-- Zalo Button -->
        <a href="https://zalo.me/0987654321" target="_blank" rel="noopener noreferrer" class="pulse-btn w-16 h-16 bg-[#0068FF] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-[#0052cc] transition-colors group">
            <span class="font-sans font-black italic text-[1.4rem]">Zalo</span>
            <span class="absolute right-full mr-5 bg-slate-800 text-white text-sm font-bold px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg after:content-[''] after:absolute after:top-1/2 after:left-full after:-translate-y-1/2 after:border-[6px] after:border-transparent after:border-l-slate-800">
                Chat Zalo Ngay
            </span>
        </a>
        <!-- Hotline Button -->
        <a href="tel:0987654321" class="pulse-btn w-16 h-16 bg-[#EF4444] text-white rounded-full flex items-center justify-center text-2xl shadow-xl hover:bg-[#DC2626] transition-colors group">
            <i class="fa-solid fa-phone-volume animate-bounce"></i>
            <span class="absolute right-full mr-5 bg-slate-800 text-white text-sm font-bold px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg after:content-[''] after:absolute after:top-1/2 after:left-full after:-translate-y-1/2 after:border-[6px] after:border-transparent after:border-l-slate-800">
                Gọi Hotline Tư Vấn
            </span>
        </a>
    </div>`;

html = html.substring(0, floatingStart) + newFloating + html.substring(floatingEnd);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed testimonials and floating buttons');
