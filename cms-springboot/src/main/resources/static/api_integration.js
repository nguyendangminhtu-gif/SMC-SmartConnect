document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Load Form Fields (Nhu cầu học)
    fetch('/api/form-fields')
        .then(res => res.json())
        .then(data => {
            const select = document.querySelector('select[required]');
            if (select && data && data.length > 0) {
                const firstOption = select.querySelector('option[disabled]');
                select.innerHTML = '';
                if(firstOption) select.appendChild(firstOption);
                
                data.forEach(field => {
                    if (field.options) {
                        const opts = field.options.split(',');
                        opts.forEach(opt => {
                            const optText = opt.trim();
                            if(optText) {
                                const option = document.createElement('option');
                                option.value = optText;
                                option.textContent = optText;
                                select.appendChild(option);
                            }
                        });
                    }
                });
            }
        }).catch(err => console.error("Error loading form fields", err));

    // 2. Handle Form Submission
    const form = document.getElementById('hero-register');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputs = form.querySelectorAll('input, select');
            if (inputs.length < 5) return;
            
            const payload = {
                name: inputs[0].value,
                phone: inputs[1].value,
                email: inputs[2].value || "Chưa cung cấp",
                needs: inputs[3].value,
            };

            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Đang gửi...';
            btn.disabled = true;

            fetch('/api/forms/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            .then(res => res.json())
            .then(data => {
                alert(data.message || 'Đăng ký thành công!');
                form.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            })
            .catch(err => {
                alert('Có lỗi xảy ra, vui lòng thử lại sau.');
                btn.innerHTML = originalText;
                btn.disabled = false;
            });
        });
    }

    // 3. Load Contact & FAQ
    fetch('/api/contact')
        .then(res => res.json())
        .then(data => {
            if (data.info) {
                const hotlines = document.querySelectorAll('strong');
                hotlines.forEach(el => {
                    if (el.textContent.includes('0902 596 999') && data.info.hotline) {
                        el.textContent = data.info.hotline;
                    }
                    if (el.textContent.includes('sales@smartconnect.com.vn') && data.info.emailSales) {
                        el.textContent = data.info.emailSales;
                    }
                });
                
                // sticky widgets update
                const stickyWidgets = document.querySelectorAll('.sticky-widgets a');
                if (stickyWidgets.length >= 2 && data.info.phone) {
                    const phoneRaw = data.info.phone.replace(/[^0-9]/g, '');
                    stickyWidgets[0].href = 'tel:' + phoneRaw;
                    if(data.info.zaloLink) {
                        stickyWidgets[1].href = data.info.zaloLink;
                    }
                }

                const footerList = document.querySelector('.contact-list');
                if (footerList) {
                    footerList.innerHTML = `
                        <li><i class="fa-solid fa-phone"></i> <span><strong>Hotline:</strong> ${data.info.hotline || ''}</span></li>
                        <li><i class="fa-solid fa-mobile-screen"></i> <span><strong>SĐT:</strong> ${data.info.phone || ''}</span></li>
                        <li><i class="fa-solid fa-envelope"></i> <span><strong>Kinh doanh:</strong> ${data.info.emailSales || ''}</span></li>
                        <li><i class="fa-solid fa-envelope"></i> <span><strong>Đào tạo:</strong> ${data.info.emailTraining || ''}</span></li>
                        <li><i class="fa-solid fa-location-dot"></i> <span><strong>Địa chỉ:</strong> ${data.info.address || ''}</span></li>
                    `;
                }
            }
            if (data.faqs && data.faqs.length > 0) {
                const faqContainer = document.querySelector('.faq-container');
                if (faqContainer) {
                    let html = '';
                    data.faqs.forEach(faq => {
                        html += `
                        <div class="faq-item" style="background: var(--white); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 15px; padding: 20px;">
                            <h4 style="font-size: 18px; font-weight: 700; color: var(--primary-blue); display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">${faq.question}</h4>
                            <p style="color: var(--text-gray);">${faq.answer}</p>
                        </div>
                        `;
                    });
                    faqContainer.innerHTML = html;
                }
            }
        }).catch(err => console.error("Error loading contact", err));

    // 4. Load Services
    fetch('/api/services')
        .then(res => res.json())
        .then(data => {
            if (data && data.length > 0) {
                const grid = document.querySelector('.grid-6col');
                if (grid) {
                    let html = '';
                    data.forEach(item => {
                        const iconClass = item.icon || 'fa-solid fa-check';
                        html += `
                        <a href="/${item.slug}.html" class="prog-card">
                            <div class="prog-icon"><i class="${iconClass}"></i></div>
                            <h4>${item.title}</h4>
                            <p>${item.description}</p>
                            <span class="view-more">Xem chi tiết <i class="fa-solid fa-arrow-right"></i></span>
                        </a>
                        `;
                    });
                    grid.innerHTML = html;
                }
            }
        }).catch(err => console.error("Error loading services", err));

    // 5. Load Banners
    fetch('/api/banners')
        .then(res => res.json())
        .then(data => {
            if (data && data.length > 0) {
                // Find banner for Trang chủ
                const homeBanner = data.find(b => b.page === 'Trang chủ');
                if (homeBanner) {
                    const hero = document.getElementById('home');
                    if (hero) {
                        hero.style.backgroundImage = `linear-gradient(rgba(26, 59, 140, 0.8), rgba(26, 59, 140, 0.7)), url('${homeBanner.imageUrl}')`;
                        const h1 = hero.querySelector('h1');
                        if(h1) h1.textContent = homeBanner.title;
                        const h2 = hero.querySelector('.hero-sub');
                        if(h2) h2.textContent = homeBanner.subtitle;
                    }
                }
            }
        }).catch(err => console.error("Error loading banners", err));

    // 6. Load About Us
    fetch('/api/about')
        .then(res => res.json())
        .then(data => {
            if (data && data.length > 0) {
                const aboutBox = document.querySelector('.about-box');
                if (aboutBox) {
                    const h3 = aboutBox.querySelector('h3');
                    const content = aboutBox.querySelector('.about-content');
                    if (h3 && content) {
                        h3.textContent = data[0].sectionName;
                        // convert newlines to p tags
                        const paragraphs = data[0].content.split('\n').filter(p => p.trim() !== '');
                        let html = '';
                        paragraphs.forEach(p => {
                            html += `<p>${p}</p>`;
                        });
                        content.innerHTML = html;
                    }
                }
            }
        }).catch(err => console.error("Error loading about", err));

    // 7. Load Industries
    fetch('/api/industries')
        .then(res => res.json())
        .then(data => {
            if (data && data.length > 0) {
                const industryDropdown = document.querySelectorAll('.dropdown-trigger')[1]; // Lĩnh vực is the 2nd dropdown
                if (industryDropdown) {
                    const ul = industryDropdown.querySelector('.dropdown');
                    if (ul) {
                        let html = '';
                        data.forEach(ind => {
                            html += `<li><a href="/${ind.slug}.html">${ind.title}</a></li>`;
                        });
                        ul.innerHTML = html;
                    }
                }
            }
        }).catch(err => console.error("Error loading industries", err));

});
