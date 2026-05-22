document.addEventListener("DOMContentLoaded", function() {
    fetch('/api/industry-sections/TAM_LOP')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('dynamic-blocks-container');
            if (data && data.length > 0 && container) {
                container.innerHTML = '';
                data.forEach((section, index) => {
                    let blockHtml = '';
                    
                    if (index % 2 === 0) {
                        blockHtml = `
                        <div class="vis-mis-row" style="margin-top: 80px; align-items: center; display: flex; gap: 50px;">
                            <div class="vis-mis-text" style="flex: 1;">
                                ${section.subtitle ? `<span class="service-label">${section.subtitle}</span>` : ''}
                                <h2>${section.title || ''}</h2>
                                ${section.content || ''}
                            </div>
                            <div class="vis-mis-image" style="flex: 1.2;">
                                <img src="${section.imageUrl1 ? (section.imageUrl1.startsWith('/') ? section.imageUrl1 : '/' + section.imageUrl1) : ''}" alt="" style="border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
                            </div>
                        </div>`;
                    } else {
                        // Different layout for even blocks (index 1), like the Solar energy section
                        if (index === 1 && !section.subtitle) {
                            blockHtml = `
                            <div class="sector-section-title" style="margin-top: 100px;">
                                <h2 style="color: var(--primary-blue);">${section.title || ''}</h2>
                                ${section.content || ''}
                                <div style="max-width: 1200px; margin: 0 auto; margin-top: 45px;">
                                    <img src="${section.imageUrl1 ? (section.imageUrl1.startsWith('/') ? section.imageUrl1 : '/' + section.imageUrl1) : ''}" alt="" style="width: 100%; aspect-ratio: 16 / 7; object-fit: cover; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
                                </div>
                            </div>`;
                        } else {
                            blockHtml = `
                            <div class="vis-mis-row row-reverse" style="margin-top: 80px; align-items: center; display: flex; gap: 50px;">
                                <div class="vis-mis-text" style="flex: 1;">
                                    ${section.subtitle ? `<span class="service-label">${section.subtitle}</span>` : ''}
                                    <h2>${section.title || ''}</h2>
                                    ${section.content || ''}
                                </div>
                                <div class="vis-mis-image" style="flex: 1.2;">
                                    <img src="${section.imageUrl1 ? (section.imageUrl1.startsWith('/') ? section.imageUrl1 : '/' + section.imageUrl1) : ''}" alt="" style="border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
                                </div>
                            </div>`;
                        }
                    }
                    
                    container.innerHTML += blockHtml;
                });
            }
        })
        .catch(err => console.error("Error loading TAM_LOP sections:", err));
});
