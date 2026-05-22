document.addEventListener("DOMContentLoaded", function() {
    // 1. Sticky Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // 2. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                
                // Update active state
                document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
                if(this.classList.contains('active') === false && this.closest('.nav-links')) {
                    this.classList.add('active');
                }
                
                // Scroll
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Active state on scroll
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;

        document.querySelectorAll('section[id], header[id], footer[id]').forEach(section => {
            if (
                scrollPosition >= section.offsetTop - 100 &&
                scrollPosition < section.offsetTop + section.offsetHeight - 100
            ) {
                let currentId = section.attributes.id.value;
                removeAllActiveClasses();
                addActiveClass(currentId);
            }
        });
    });

    function removeAllActiveClasses() {
        document.querySelectorAll('.nav-links a').forEach(el => {
            el.classList.remove('active');
        });
    }

    function addActiveClass(id) {
        let selector = `.nav-links a[href="#${id}"]`;
        let element = document.querySelector(selector);
        if (element) {
            element.classList.add('active');
        }
    }

    // 3. Modal logic for Services
    const modalOverlay = document.getElementById('service-modal-overlay');
    const modalContent = document.getElementById('service-modal-content');
    const closeBtn = document.querySelector('.modal-close-btn');

    document.querySelectorAll('.service-card-open').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceId = this.getAttribute('data-service');
            openModal(serviceId);
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) closeModal();
        });
    }

    function openModal(serviceId) {
        if (!modalOverlay) return;
        
        // Populate modal based on serviceId
        const titleEl = document.getElementById('modal-title');
        const bodyEl = document.getElementById('modal-body');
        
        if (serviceId === 'linhvuc') {
            titleEl.innerText = "Lĩnh vực ứng dụng UAV";
            bodyEl.innerHTML = `
                <p>Khám phá các ứng dụng thực tế của UAV trong các lĩnh vực kinh tế - xã hội:</p>
                <ul class="danger-list" style="padding-left: 0;">
                    <li><strong><i class="fa-solid fa-building"></i> Địa ốc:</strong> Chụp ảnh 360, quay video toàn cảnh tiến độ dự án.</li>
                    <li><strong><i class="fa-solid fa-helmet-safety"></i> Xây dựng:</strong> Giám sát tiến độ, đo đạc trắc địa, tính toán thể tích.</li>
                    <li><strong><i class="fa-solid fa-house"></i> Tấm lợp:</strong> Khảo sát mái nhà, tính toán diện tích lợp ngói an toàn.</li>
                    <li><strong><i class="fa-solid fa-solar-panel"></i> Năng lượng:</strong> Kiểm tra pin mặt trời, lưới điện bằng camera nhiệt.</li>
                </ul>
            `;
        } else if (serviceId === 'daotao') {
            titleEl.innerText = "Đào tạo bay UAV cơ bản - nâng cao";
            bodyEl.innerHTML = `
                <p>Hệ thống giáo trình chuẩn quân sự kết hợp ứng dụng thực tế:</p>
                <ul>
                    <li>Lý thuyết luật bay, nghị định 288/2025.</li>
                    <li>Bay mô phỏng trên thiết bị chuyên dụng.</li>
                    <li>Thực hành bay sa hình ngoài trời với UAV thật.</li>
                    <li>Hỗ trợ làm hồ sơ cấp phép bay.</li>
                </ul>
            `;
        } else if (serviceId === 'sathach') {
            titleEl.innerText = "Sát hạch & cấp phép UAV";
            bodyEl.innerHTML = `<p>Trung tâm phối hợp với cơ quan chức năng hỗ trợ học viên hoàn thành kỳ thi sát hạch để được cấp giấy phép/chứng chỉ bay hợp lệ trên toàn quốc.</p>`;
        } else if (serviceId === 'nongnghiep') {
            titleEl.innerText = "Ứng dụng UAV Nông nghiệp";
            bodyEl.innerHTML = `<p>Đào tạo và chuyển giao công nghệ sử dụng máy bay nông nghiệp (DJI Agras, XAG) để phun thuốc bảo vệ thực vật, rải phân bón hiệu quả cao.</p>`;
        } else if (serviceId === 'khaosat') {
            titleEl.innerText = "Khảo sát - Mapping lập bản đồ";
            bodyEl.innerHTML = `<p>Cung cấp dịch vụ và đào tạo lập bản đồ Orthomosaic 2D, mô hình 3D Mesh, quét LiDAR và hình ảnh nhiệt bằng phần mềm chuyên dụng (DJI Terra, Pix4D).</p>`;
        } else if (serviceId === 'media') {
            titleEl.innerText = "Quay phim sự kiện - Truyền thông";
            bodyEl.innerHTML = `<p>Quay phim chụp ảnh trên không chất lượng 4K/8K phục vụ quảng cáo bất động sản thương mại, sự kiện ngoài trời, và truyền thông doanh nghiệp.</p>`;
        } else if (serviceId === 'cungcap') {
            titleEl.innerText = "Cung cấp UAV chính hãng";
            bodyEl.innerHTML = `<p>Phân phối các dòng sản phẩm máy bay không người lái chính hãng phục vụ mọi nhu cầu: Nông nghiệp, Khảo sát, Quay phim với chế độ bảo hành uy tín.</p>`;
        } else {
            titleEl.innerText = "Thông tin dịch vụ";
            bodyEl.innerHTML = `<p>Đang cập nhật nội dung chi tiết...</p>`;
        }
        
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling background
    }

    function closeModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    // 4. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const title = item.querySelector('.faq-title');
        if (title) {
            title.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all
                faqItems.forEach(el => el.classList.remove('active'));
                
                // If it wasn't active, open it
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
});
