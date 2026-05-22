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
                    const date = news.createdAt || 'Mới cập nhật';
                    // truncate content to 100 chars
                    const shortContent = news.content.length > 100 ? news.content.substring(0, 100) + '...' : news.content;
                    
                    html += `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100" style="border: none; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                            <img src="${img}" class="card-img-top" alt="${news.title}" style="height: 220px; object-fit: cover;">
                            <div class="card-body p-4">
                                <span style="color: var(--accent-red); font-size: 13px; font-weight: 600; display: block; margin-bottom: 10px;">
                                    <i class="fa-regular fa-calendar"></i> ${date}
                                </span>
                                <h5 class="card-title" style="color: var(--primary-blue); font-weight: 700; font-size: 18px; line-height: 1.4; margin-bottom: 15px;">
                                    <a href="#" style="text-decoration: none; color: inherit;">${news.title}</a>
                                </h5>
                                <p class="card-text" style="color: var(--text-gray); font-size: 14px;">${shortContent}</p>
                                <a href="#" style="color: var(--primary-blue); font-weight: 600; text-decoration: none; font-size: 14px; margin-top: auto; display: inline-block;">Đọc tiếp <i class="fa-solid fa-arrow-right" style="font-size: 12px; margin-left: 5px;"></i></a>
                            </div>
                        </div>
                    </div>
                    `;
                });
                container.innerHTML = html;
            }
        }).catch(err => console.error("Error loading news", err));
});
