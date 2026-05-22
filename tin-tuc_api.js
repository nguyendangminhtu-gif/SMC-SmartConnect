document.addEventListener("DOMContentLoaded", function() {
    
    // Load News
    fetch('/api/news')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('news-container');
            if (container && data && data.length > 0) {
                let html = '';
                data.forEach(news => {
                    const img = news.imageUrl || 'images/default-news.png';
                    const date = news.createdAt ? new Date(news.createdAt).toLocaleDateString('vi-VN', {day: 'numeric', month: 'long', year: 'numeric'}) : 'Mới cập nhật';
                    
                    // Strip HTML tags to get plain text
                    let tempDiv = document.createElement("div");
                    tempDiv.innerHTML = news.content;
                    let textContent = tempDiv.textContent || tempDiv.innerText || "";
                    
                    const shortContent = textContent.length > 250 ? textContent.substring(0, 250) + '...' : textContent;
                    const newsUrl = `/${news.slug}.html`;
                    
                    html += `
                    <div class="col-12 mb-4">
                        <div class="horizontal-news-card" style="display: flex; gap: 30px; align-items: flex-start; padding-bottom: 20px; border-bottom: 1px solid #e2e8f0;">
                            <a href="${newsUrl}" style="flex-shrink: 0; width: 35%;">
                                <img src="${img}" alt="${news.title}" style="width: 100%; height: 250px; object-fit: cover;">
                            </a>
                            <div class="news-content" style="flex-grow: 1; padding-top: 10px;">
                                <h3 style="font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 700; margin-bottom: 12px; line-height: 1.4;">
                                    <a href="${newsUrl}" style="text-decoration: none; color: var(--primary-blue);">${news.title}</a>
                                </h3>
                                <p style="color: #64748b; font-size: 14px; margin-bottom: 15px;">${date}</p>
                                <p style="color: #000; font-size: 15px; margin-bottom: 20px; line-height: 1.6;">${shortContent}</p>
                                <a href="${newsUrl}" style="color: var(--text-dark); font-weight: 600; text-decoration: none; border-bottom: 2px solid var(--gold); padding-bottom: 2px; display: inline-block;">Xem thêm</a>
                            </div>
                        </div>
                    </div>
                    `;
                });
                container.innerHTML = html;
            }
        }).catch(err => console.error("Error loading news", err));
        
    // Load Gallery
    fetch('/api/gallery')
        .then(res => res.json())
        .then(data => {
            const container = document.querySelector('.gallery-grid');
            if (container && data && data.length > 0) {
                let html = '';
                data.forEach(item => {
                    html += `
                    <div class="gallery-card">
                        <img src="${item.imageUrl}" alt="${item.description}">
                    </div>
                    `;
                });
                container.innerHTML = html;
            }
        }).catch(err => console.error("Error loading gallery", err));
});
