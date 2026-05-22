const fs = require('fs');

const htmlContent = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SMC SmartConnect - Đào tạo & Cấp chứng chỉ UAV Chuyên nghiệp</title>
    <meta name="description" content="Trung tâm Đào tạo Công nghệ SMC - Cấp chứng chỉ UAV do Bộ Quốc Phòng cấp. Đáp ứng quy định mới từ 01/07/2026.">
    <link rel="icon" type="image/png" href="images/favicon.png">
    <link rel="shortcut icon" type="image/png" href="images/favicon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css?v=20260522_landing">
</head>
<body>

    <!-- 1. Header & Navigation -->
    <nav class="navbar">
        <div class="container nav-container">
            <a href="#hero" class="logo">
                <img src="images/logo.png" alt="SMC Logo" class="nav-logo-img">
                <span>SMC SmartConnect</span>
            </a>
            <ul class="nav-links">
                <li><a href="#hero" class="active">Trang chủ</a></li>
                <li><a href="#about">Về chúng tôi</a></li>
                <li><a href="#services">Lĩnh vực & Dịch vụ</a></li>
                <li><a href="#roadmap">Lộ trình học</a></li>
                <li><a href="#team">Đội ngũ</a></li>
                <li><a href="#partners">Đối tác</a></li>
                <li><a href="#news">Tin tức</a></li>
                <li><a href="#contact">Liên hệ</a></li>
            </ul>
            <a href="#hero-register" class="btn btn-primary nav-btn">Đăng ký ngay</a>
            <div class="menu-toggle" id="mobile-menu"><i class="fa-solid fa-bars"></i></div>
        </div>
    </nav>

    <!-- 2. Hero Banner -->
    <header id="hero" class="hero" style="background-image: linear-gradient(rgba(26, 59, 140, 0.8), rgba(26, 59, 140, 0.7)), url('images/hero.png'); padding-top: 120px;">
        <div class="container hero-grid">
            <div class="hero-text-content">
                <h1 style="text-align: left;">HỌC & THI CHỨNG CHỈ UAV/DRONE</h1>
                <h2 class="hero-sub" style="font-size: 20px; font-weight: 500; text-align: left; color: #fff;">Đào tạo bài bản – Hỗ trợ thi chứng chỉ – Ứng dụng thực tế</h2>
                <p class="subtitle" style="text-align: left; margin-left: 0;">Từ 01/07/2026, quy định sử dụng UAV/Drone sẽ chặt chẽ hơn. Đăng ký ngay để nắm rõ quy định và kỹ năng bay an toàn.</p>
                <div style="text-align: left;">
                    <ul class="hero-list" style="margin-bottom: 20px; text-align: left; padding-left: 0; color: #fff; list-style: none;">
                        <li style="margin-bottom: 10px; display: flex; align-items: center; gap: 10px;"><i class="fa-solid fa-check-circle" style="color: #10b981;"></i> Cam kết đầu ra chứng chỉ hợp lệ.</li>
                        <li style="margin-bottom: 10px; display: flex; align-items: center; gap: 10px;"><i class="fa-solid fa-check-circle" style="color: #10b981;"></i> Lịch học linh hoạt cho người đi làm.</li>
                        <li style="margin-bottom: 10px; display: flex; align-items: center; gap: 10px;"><i class="fa-solid fa-check-circle" style="color: #10b981;"></i> Thực hành trên máy bay chuyên dụng.</li>
                    </ul>
                </div>
            </div>
            <div class="hero-form-box">
                <form id="hero-register" class="hero-register-form">
                    <h3 class="form-title" style="color: var(--primary-blue); font-size: 22px; margin-bottom: 15px;">Đăng Ký Khảo Sát Miễn Phí</h3>
                    <div class="form-group" style="margin-bottom: 12px;">
                        <input type="text" placeholder="Họ và tên *" required>
                    </div>
                    <div class="form-group" style="margin-bottom: 12px;">
                        <input type="tel" placeholder="Số điện thoại *" required>
                    </div>
                    <div class="form-group" style="margin-bottom: 12px;">
                        <input type="text" placeholder="Khu vực đang sống/làm việc *" required>
                    </div>
                    <div class="form-group" style="margin-bottom: 12px;">
                        <select required>
                            <option value="" disabled selected>Nhu cầu học của bạn? *</option>
                            <option value="daotao">Đào tạo lái UAV</option>
                            <option value="thi">Thi chứng chỉ</option>
                            <option value="nongnghiep">Ứng dụng nông nghiệp</option>
                            <option value="khaosat">Khảo sát – Mapping</option>
                            <option value="quayphim">Quay phim – Truyền thông</option>
                        </select>
                    </div>
                    <div class="form-group" style="margin-bottom: 12px;">
                        <input type="text" placeholder="Thời gian mong muốn học *" required>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block" style="font-size: 16px; padding: 12px;">GỬI THÔNG TIN <i class="fa-solid fa-paper-plane"></i></button>
                    <p style="font-size: 13px; color: #666; margin-top: 10px; text-align: center;">* Thông tin của bạn được bảo mật tuyệt đối</p>
                </form>
            </div>
        </div>
    </header>

    <!-- 3. About Section -->
    <section id="about" class="about-legal container" style="padding-top: 80px;">
        <h2 class="section-title text-center" style="margin-bottom: 40px;">Về Đơn vị chủ quản SMC & Quy định mới</h2>
        
        <div class="legal-card warning-box" style="margin-bottom: 30px;">
            <div class="warning-header">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <h3>Quy định Bắt Buộc</h3>
            </div>
            <div class="warning-content">
                <p>Theo quy định mới nhất từ <strong>Nghị định 288/2025/NĐ-CP</strong> và <strong>Thông tư 146/2025/TT-BQP</strong>, BẮT BUỘC cá nhân điều khiển UAV phải qua đào tạo và có chứng chỉ hợp lệ.</p>
            </div>
        </div>

        <div class="legal-card about-box" style="margin-bottom: 40px;">
            <div class="about-header">
                <i class="fa-solid fa-building-shield"></i>
                <h3>Về Trung tâm SMC</h3>
            </div>
            <div class="about-content">
                <p><strong>Trung tâm Đào tạo Công nghệ SMC</strong> trực thuộc <strong>Công ty TNHH Công nghệ Smartconnect</strong> - Đơn vị đi đầu về tự động hóa, IoT, AI và Smart City tại Việt Nam.</p>
            </div>
        </div>

        <!-- Lợi ích -->
        <h3 class="text-center" style="margin-bottom: 30px; font-size: 24px; color: var(--primary-blue);">Lợi ích khi học tại SMC</h3>
        <div class="benefits-grid" style="margin-bottom: 50px;">
            <div class="benefit-card">
                <div class="icon-circle"><i class="fa-solid fa-plane-departure"></i></div>
                <h3>Học thực hành trực tiếp</h3>
            </div>
            <div class="benefit-card">
                <div class="icon-circle"><i class="fa-solid fa-map-location-dot"></i></div>
                <h3>Lớp học gần nơi ở</h3>
            </div>
            <div class="benefit-card">
                <div class="icon-circle"><i class="fa-regular fa-calendar-check"></i></div>
                <h3>Lịch học linh hoạt</h3>
            </div>
            <div class="benefit-card">
                <div class="icon-circle"><i class="fa-solid fa-file-signature"></i></div>
                <h3>Hỗ trợ thi chứng chỉ</h3>
            </div>
            <div class="benefit-card">
                <div class="icon-circle"><i class="fa-solid fa-headset"></i></div>
                <h3>Tư vấn mua UAV</h3>
            </div>
            <div class="benefit-card">
                <div class="icon-circle"><i class="fa-solid fa-briefcase"></i></div>
                <h3>Ứng dụng thực tế cao</h3>
            </div>
        </div>

        <!-- Đối tượng -->
        <h3 class="text-center" style="margin-bottom: 30px; font-size: 24px; color: var(--primary-blue);">Đối tượng học viên</h3>
        <div class="grid-2col">
            <div style="background: var(--light-blue-bg); padding: 30px; border-radius: 12px;">
                <ul class="danger-list" style="background: transparent; padding: 0;">
                    <li style="font-size: 16px; margin-bottom: 20px;"><i class="fa-solid fa-check" style="color:var(--primary-blue); font-size:20px; flex-shrink: 0;"></i> <span><strong>Cá nhân lái Drone:</strong> Đam mê hoặc làm nghề nghiệp tự do.</span></li>
                    <li style="font-size: 16px; margin-bottom: 20px;"><i class="fa-solid fa-check" style="color:var(--primary-blue); font-size:20px; flex-shrink: 0;"></i> <span><strong>Đơn vị nông nghiệp:</strong> Phun thuốc, rải phân cho diện tích lớn.</span></li>
                </ul>
            </div>
            <div style="background: var(--light-blue-bg); padding: 30px; border-radius: 12px;">
                <ul class="danger-list" style="background: transparent; padding: 0;">
                    <li style="font-size: 16px; margin-bottom: 20px;"><i class="fa-solid fa-check" style="color:var(--primary-blue); font-size:20px; flex-shrink: 0;"></i> <span><strong>Doanh nghiệp xây dựng/khảo sát:</strong> Lập bản đồ, giám sát thi công.</span></li>
                    <li style="font-size: 16px; margin-bottom: 20px;"><i class="fa-solid fa-check" style="color:var(--primary-blue); font-size:20px; flex-shrink: 0;"></i> <span><strong>Media & Sự kiện:</strong> Quay phim quảng cáo, truyền thông.</span></li>
                </ul>
            </div>
        </div>
    </section>

    <!-- 4. Services Section -->
    <section id="services" class="programs-6grid-section bg-light" style="padding-top: 80px;">
        <div class="container">
            <h2 class="section-title">CHƯƠNG TRÌNH ĐÀO TẠO & CÁC DỊCH VỤ</h2>
            <p class="section-desc">Bấm vào từng thẻ để xem chi tiết.</p>
            
            <div class="grid-6col">
                <a href="#" class="prog-card service-card-open" data-service="linhvuc">
                    <div class="prog-icon"><i class="fa-solid fa-layer-group"></i></div>
                    <h4>LĨNH VỰC ỨNG DỤNG</h4>
                    <p>Địa ốc, Xây dựng, Tấm lợp, Năng lượng.</p>
                </a>
                <a href="#" class="prog-card service-card-open" data-service="daotao">
                    <div class="prog-icon"><i class="fa-solid fa-graduation-cap"></i></div>
                    <h4>ĐÀO TẠO BAY UAV CƠ BẢN - NÂNG CAO</h4>
                    <p>Hỗ trợ thủ tục nhanh, đúng quy định</p>
                </a>
                <a href="#" class="prog-card service-card-open" data-service="sathach">
                    <div class="prog-icon"><i class="fa-solid fa-clipboard-check"></i></div>
                    <h4>SÁT HẠCH & CẤP PHÉP UAV</h4>
                    <p>Quy trình bài bản, đảm bảo đạt chuẩn</p>
                </a>
                <a href="#" class="prog-card service-card-open" data-service="nongnghiep">
                    <div class="prog-icon"><i class="fa-solid fa-seedling"></i></div>
                    <h4>ỨNG DỤNG UAV NÔNG NGHIỆP</h4>
                    <p>Phun thuốc, rải phân, giám sát cây trồng</p>
                </a>
                <a href="#" class="prog-card service-card-open" data-service="khaosat">
                    <div class="prog-icon"><i class="fa-solid fa-map-location-dot"></i></div>
                    <h4>KHẢO SÁT – MAPPING LẬP BẢN ĐỒ</h4>
                    <p>Orthomosaic, 3D, Hình ảnh nhiệt</p>
                </a>
                <a href="#" class="prog-card service-card-open" data-service="media">
                    <div class="prog-icon"><i class="fa-solid fa-bullhorn"></i></div>
                    <h4>QUAY PHIM SỰ KIỆN – TRUYỀN THÔNG</h4>
                    <p>Hình ảnh chất lượng cao, chuyên nghiệp</p>
                </a>
                <a href="#" class="prog-card service-card-open" data-service="cungcap">
                    <div class="prog-icon"><i class="fa-solid fa-box"></i></div>
                    <h4>CUNG CẤP UAV CHÍNH HÃNG</h4>
                    <p>Đa dạng chủng loại, bảo hành uy tín</p>
                </a>
            </div>
        </div>
    </section>

    <!-- 5. Roadmap Section -->
    <section id="roadmap" class="container" style="padding-top: 80px; padding-bottom: 60px;">
        <h2 class="section-title">LỘ TRÌNH HỌC & THI CHỨNG CHỈ</h2>
        <p class="section-desc">Quy trình 4 bước chuẩn để lấy giấy phép bay hợp lệ.</p>
        
        <div class="timeline">
            <div class="timeline-container timeline-left">
                <div class="timeline-content">
                    <h3>Bước 1: Tư vấn & Khảo sát</h3>
                    <p>Chọn máy bay và gói học phù hợp với nhu cầu thực tế của bạn.</p>
                </div>
            </div>
            <div class="timeline-container timeline-right">
                <div class="timeline-content">
                    <h3>Bước 2: Học Lý thuyết</h3>
                    <p>Nắm vững luật bay, nghị định 288/2025/NĐ-CP và kỹ thuật điều khiển cơ bản.</p>
                </div>
            </div>
            <div class="timeline-container timeline-left">
                <div class="timeline-content">
                    <h3>Bước 3: Thực hành</h3>
                    <p>Thực hành bay sa hình & Thực tế kèm 1-1 bởi chuyên gia có kinh nghiệm.</p>
                </div>
            </div>
            <div class="timeline-container timeline-right">
                <div class="timeline-content">
                    <h3>Bước 4: Thi sát hạch & Chứng chỉ</h3>
                    <p>Hỗ trợ thi sát hạch để nhận chứng chỉ bay hợp pháp của cơ quan chức năng.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 6. Team Section -->
    <section id="team" class="instructors-section bg-light" style="padding-top: 80px; padding-bottom: 80px;">
        <div class="container">
            <h2 class="section-title">ĐỘI NGŨ CHUYÊN GIA ĐÀO TẠO</h2>
            <div class="instructors-grid">
                <div class="instructor-card" style="background: var(--white); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); text-align: center;">
                    <img src="images/instructor_tech.png" alt="Chuyên gia Kỹ thuật" style="width: 100%; height: 250px; object-fit: cover; object-position: center;">
                    <div style="padding: 20px;">
                        <h3 style="color: var(--primary-blue); font-size: 20px; font-weight: 700; margin-bottom: 5px;">Chuyên gia Kỹ thuật</h3>
                        <p style="color: var(--accent-red); font-weight: 600; font-size: 14px; margin-bottom: 10px;">Cố vấn vận hành UAV</p>
                    </div>
                </div>
                <div class="instructor-card" style="background: var(--white); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); text-align: center;">
                    <img src="images/instructor_media.png" alt="Giảng viên Media" style="width: 100%; height: 250px; object-fit: cover; object-position: center;">
                    <div style="padding: 20px;">
                        <h3 style="color: var(--primary-blue); font-size: 20px; font-weight: 700; margin-bottom: 5px;">Giảng viên Media</h3>
                        <p style="color: var(--accent-red); font-weight: 600; font-size: 14px; margin-bottom: 10px;">Quay phim trên không</p>
                    </div>
                </div>
                <div class="instructor-card" style="background: var(--white); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); text-align: center;">
                    <img src="images/instructor_legal.png" alt="Cố vấn Pháp chế" style="width: 100%; height: 250px; object-fit: cover; object-position: center;">
                    <div style="padding: 20px;">
                        <h3 style="color: var(--primary-blue); font-size: 20px; font-weight: 700; margin-bottom: 5px;">Cố vấn Pháp chế</h3>
                        <p style="color: var(--accent-red); font-weight: 600; font-size: 14px; margin-bottom: 10px;">Đảm bảo thủ tục cấp phép</p>
                    </div>
                </div>
                <div class="instructor-card" style="background: var(--white); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); text-align: center;">
                    <img src="images/instructor_military.png" alt="Giảng viên Trường Sĩ quan Không quân" style="width: 100%; height: 250px; object-fit: cover; object-position: center;">
                    <div style="padding: 20px;">
                        <h3 style="color: var(--primary-blue); font-size: 20px; font-weight: 700; margin-bottom: 5px;">Giảng viên Trường SQ Không quân</h3>
                        <p style="color: var(--accent-red); font-weight: 600; font-size: 14px; margin-bottom: 10px;">Đào tạo bay chuẩn quân sự</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 7. Partners Section -->
    <section id="partners" class="testimonial-section container" style="padding-top: 80px; padding-bottom: 80px;">
        <h2 class="section-title">HỌC VIÊN NÓI GÌ VỀ SMC</h2>
        <div class="testimonial-carousel" style="margin-bottom: 50px;">
            <div class="review-card" style="background: var(--white); padding: 30px; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.02);">
                <div style="display: flex; gap: 5px; color: var(--gold); margin-bottom: 15px;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                <p style="color: var(--text-gray); font-style: italic; margin-bottom: 20px;">"Nhờ chứng chỉ SMC, hợp tác xã đã bay rải phân hợp pháp và không bị cơ quan chức năng làm khó dễ."</p>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="width: 50px; height: 50px; background: #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center;"><i class="fa-solid fa-user"></i></div>
                    <div>
                        <h4 style="font-weight: 700; color: var(--text-dark); font-size: 16px;">Anh Hoàng Văn T.</h4>
                        <span style="font-size: 13px; color: #64748b;">Đồng Tháp</span>
                    </div>
                </div>
            </div>
            <div class="review-card" style="background: var(--white); padding: 30px; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.02);">
                <div style="display: flex; gap: 5px; color: var(--gold); margin-bottom: 15px;"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                <p style="color: var(--text-gray); font-style: italic; margin-bottom: 20px;">"Khóa học thực tế, giảng viên cầm tay chỉ việc, tôi học xong là bay được ngay."</p>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="width: 50px; height: 50px; background: #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center;"><i class="fa-solid fa-user"></i></div>
                    <div>
                        <h4 style="font-weight: 700; color: var(--text-dark); font-size: 16px;">Nguyễn Thành Nam</h4>
                        <span style="font-size: 13px; color: #64748b;">Hà Nội</span>
                    </div>
                </div>
            </div>
        </div>

        <h3 class="text-center" style="margin-bottom: 30px; font-size: 24px; color: var(--primary-blue);">Đối tác & Khách hàng</h3>
        <div id="partners-container" class="row">
            <div class="col-md-3 col-sm-4 col-6"><div class="partner-card"><img src="images/partner1.png" alt="Đối tác 1" class="partner-logo"></div></div>
            <div class="col-md-3 col-sm-4 col-6"><div class="partner-card"><img src="images/partner2.png" alt="Đối tác 2" class="partner-logo"></div></div>
            <div class="col-md-3 col-sm-4 col-6"><div class="partner-card"><img src="images/partner3.png" alt="Đối tác 3" class="partner-logo"></div></div>
            <div class="col-md-3 col-sm-4 col-6"><div class="partner-card"><img src="images/partner4.png" alt="Đối tác 4" class="partner-logo"></div></div>
        </div>
    </section>

    <!-- 8. News Section -->
    <section id="news" class="news-wrapper bg-light" style="padding: 80px 0;">
        <div class="container">
            <h2 class="section-title">TIN TỨC VÀ HOẠT ĐỘNG</h2>
            <div class="row">
                <div class="col-md-6">
                    <div class="news-card">
                        <img src="images/construction_survey.png" alt="Drone phun thuốc trừ sâu bay lượn trên cánh đồng Việt Nam" class="news-image">
                        <div class="news-content">
                            <h3 class="news-title" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;" title="Drone phun thuốc trừ sâu bay lượn trên cánh đồng Việt Nam">Drone phun thuốc trừ sâu bay lượn trên cánh đồng Việt Nam</h3>
                            <p class="news-desc">Máy bay không người lái đang dần thay đổi bộ mặt nông nghiệp tại ĐBSCL...</p>
                            <a href="tin-tuc.html" class="news-readmore">Xem thêm <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="news-card">
                        <img src="images/uav_mission.png" alt="EVN thử nghiệm thành công kiểm tra lưới điện bằng UAV" class="news-image">
                        <div class="news-content">
                            <h3 class="news-title" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;" title="EVN thử nghiệm thành công kiểm tra lưới điện bằng UAV">EVN thử nghiệm thành công kiểm tra lưới điện bằng UAV</h3>
                            <p class="news-desc">Giảm thiểu rủi ro và tăng năng suất lao động với camera nhiệt trên không...</p>
                            <a href="tin-tuc.html" class="news-readmore">Xem thêm <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 30px;">
                <a href="tin-tuc.html" class="btn btn-outline">Xem tất cả tin tức <i class="fa-solid fa-newspaper"></i></a>
            </div>
        </div>
    </section>

    <!-- 9. FAQ Section -->
    <section id="faq" class="faq-section container" style="padding-top: 80px; padding-bottom: 80px;">
        <h2 class="section-title">CÂU HỎI THƯỜNG GẶP</h2>
        <div style="max-width: 800px; margin: 0 auto; margin-top: 40px;">
            <div class="faq-item" style="background: var(--white); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 15px;">
                <div class="faq-title" style="padding: 20px; font-size: 18px; font-weight: 700; color: var(--primary-blue); display: flex; justify-content: space-between; align-items: center;">
                    Khóa học kéo dài bao lâu? <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div class="faq-body">
                    <p style="color: var(--text-gray);">Tùy thuộc vào gói đào tạo (Cơ bản hay Nâng cao), thời gian học dao động từ 3 ngày đến 1 tuần, bao gồm cả lý thuyết và thực hành. Lịch học có thể sắp xếp linh hoạt vào cuối tuần cho người đi làm.</p>
                </div>
            </div>
            <div class="faq-item" style="background: var(--white); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 15px;">
                <div class="faq-title" style="padding: 20px; font-size: 18px; font-weight: 700; color: var(--primary-blue); display: flex; justify-content: space-between; align-items: center;">
                    Chưa có máy bay có học được không? <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div class="faq-body">
                    <p style="color: var(--text-gray);">Hoàn toàn được! Trung tâm SMC cung cấp toàn bộ thiết bị (UAV chuyên dụng) để bạn thực hành trong suốt quá trình học. Bạn không cần phải mua trước máy bay.</p>
                </div>
            </div>
            <div class="faq-item" style="background: var(--white); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 15px;">
                <div class="faq-title" style="padding: 20px; font-size: 18px; font-weight: 700; color: var(--primary-blue); display: flex; justify-content: space-between; align-items: center;">
                    Học phí và thi chứng chỉ? <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div class="faq-body">
                    <p style="color: var(--text-gray);">Học phí phụ thuộc vào nhu cầu (Nông nghiệp, Quay phim hay Trắc địa). Chúng tôi có gói Combo bao gồm trọn gói chi phí đào tạo và lệ phí hỗ trợ làm hồ sơ thi chứng chỉ.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 10. Contact & Footer Section -->
    <section id="contact" class="cta-section" style="padding-top: 80px; padding-bottom: 80px; text-align: center; background: var(--primary-blue); color: white;">
        <div class="container" style="max-width: 800px;">
            <h2 style="font-size: 36px; font-weight: 900; margin-bottom: 20px;">Đăng ký khảo sát ngay hôm nay</h2>
            <p style="font-size: 18px; margin-bottom: 40px; opacity: 0.9;">Trung tâm sẽ liên hệ tư vấn lộ trình học phù hợp nhất với bạn.</p>
            
            <a href="#hero-register" class="btn btn-white btn-large" style="font-size: 18px;">ĐIỀN FORM TƯ VẤN NGAY <i class="fa-solid fa-arrow-up" style="margin-left: 8px;"></i></a>
        </div>
    </section>

    <footer style="padding: 60px 0; background: #0f172a; color: white;">
        <div class="container footer-grid">
            <div class="footer-col">
                <div class="footer-logo-wrapper">
                    <div class="footer-logo-bg">
                        <img src="images/logo.png" alt="SMC Logo" class="footer-logo-img">
                    </div>
                    <h4 class="footer-logo-text">SMC SmartConnect</h4>
                </div>
                <p class="copyright">© 2024 Công ty TNHH Công nghệ Smartconnect.</p>
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
    </footer>

    <!-- Modals -->
    <div id="service-modal-overlay" class="modal-overlay">
        <div id="service-modal-content" class="modal-content">
            <i class="fa-solid fa-xmark modal-close-btn"></i>
            <h3 id="modal-title" class="modal-title">Dịch vụ</h3>
            <div id="modal-body" class="modal-body">
                Nội dung chi tiết...
            </div>
        </div>
    </div>

    <!-- Floating Zalo Button -->
    <div style="position: fixed; bottom: 30px; right: 30px; z-index: 999; display: flex; flex-direction: column; gap: 15px;">
        <div class="zalo-btn-wrapper">
            <div class="zalo-btn-ping"></div>
            <a href="https://zalo.me/0902596999" target="_blank" style="width: 60px; height: 60px; background: #0068ff; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 30px; font-weight: 900; box-shadow: 0 4px 15px rgba(0, 104, 255, 0.4); text-decoration: none; font-family: sans-serif; position: relative; z-index: 2;" title="Chat Zalo">Z</a>
        </div>
    </div>

    <script src="landing-scripts.js?v=1779413691038"></script>
    <script src="mobile-menu.js?v=1779357610480"></script>
</body>
</html>
`;

fs.writeFileSync('d:/UAV/index.html', htmlContent);
console.log('index.html has been successfully generated for Landing Page.');
