const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const review3 = `
                        <!-- Review 3 -->
                        <div class="swiper-slide p-4">
                            <div class="speech-bubble p-8 shadow-lg md:p-10">
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
`;

// Insert after Review 2
if (!html.includes('<!-- Review 3 -->')) {
    html = html.replace(
        /(<!-- Review 2 -->[\s\S]*?)<\/div>\s*<div class="swiper-pagination"><\/div>/,
        `$1</div>${review3}                    </div>\n                    <div class="swiper-pagination"></div>`
    );
    fs.writeFileSync('index.html', html, 'utf8');
    console.log('Added review 3');
} else {
    console.log('Review 3 already exists');
}
