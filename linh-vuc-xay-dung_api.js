document.addEventListener("DOMContentLoaded", function() {
    fetch('/api/industry-sections/XAY_DUNG')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('dynamic-blocks-container');
            if (data && data.length > 0 && container) {
                container.innerHTML = '';
                data.forEach((section, index) => {
                    let imagesHtml = '';
                    // Depending on the order/index we render differently as per design,
                    // but since the original had specific grid designs, we can use a generic grid layout.
                    if (index === 0) {
                        imagesHtml = `
                        <div class="construction-gallery-1">
                            <div class="gallery-1-left">
                                <img src="${section.imageUrl1 ? (section.imageUrl1.startsWith('/') ? section.imageUrl1 : '/' + section.imageUrl1) : ''}" alt="">
                            </div>
                            <div class="gallery-1-right">
                                <img src="${section.imageUrl2 ? (section.imageUrl2.startsWith('/') ? section.imageUrl2 : '/' + section.imageUrl2) : ''}" alt="">
                                <img src="${section.imageUrl3 ? (section.imageUrl3.startsWith('/') ? section.imageUrl3 : '/' + section.imageUrl3) : ''}" alt="">
                            </div>
                        </div>`;
                    } else if (index === 1) {
                        imagesHtml = `
                        <div class="construction-gallery-2">
                            <div class="gallery-2-row-top">
                                <img src="${section.imageUrl1 ? (section.imageUrl1.startsWith('/') ? section.imageUrl1 : '/' + section.imageUrl1) : ''}" alt="">
                                <img src="${section.imageUrl2 ? (section.imageUrl2.startsWith('/') ? section.imageUrl2 : '/' + section.imageUrl2) : ''}" alt="">
                            </div>
                            <div class="gallery-2-row-bottom">
                                <img src="${section.imageUrl3 ? (section.imageUrl3.startsWith('/') ? section.imageUrl3 : '/' + section.imageUrl3) : ''}" alt="">
                            </div>
                        </div>`;
                    } else {
                        imagesHtml = `
                        <div class="construction-gallery-3">
                            <div class="gallery-3-row-top">
                                <img src="${section.imageUrl1 ? (section.imageUrl1.startsWith('/') ? section.imageUrl1 : '/' + section.imageUrl1) : ''}" alt="">
                            </div>
                            <div class="gallery-3-row-bottom">
                                <img src="${section.imageUrl2 ? (section.imageUrl2.startsWith('/') ? section.imageUrl2 : '/' + section.imageUrl2) : ''}" alt="">
                                <img src="${section.imageUrl3 ? (section.imageUrl3.startsWith('/') ? section.imageUrl3 : '/' + section.imageUrl3) : ''}" alt="">
                            </div>
                        </div>`;
                    }

                    const blockHtml = `
                    <div class="construction-sub-section">
                        <h2>${section.title || ''}</h2>
                        ${section.content || ''}
                        <a href="index.html#contact" class="btn-gold-cta">NHẬN BÁO GIÁ NGAY <i class="fa-solid fa-chevron-right" style="font-size: 10px;"></i></a>
                        ${imagesHtml}
                    </div>`;
                    
                    container.innerHTML += blockHtml;
                });
            }
        })
        .catch(err => console.error("Error loading XAY_DUNG sections:", err));
});
