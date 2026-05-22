document.addEventListener("DOMContentLoaded", function() {
    // Load About Sections
    fetch('/api/about')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('vision-mission-container');
            if (container && data && data.length > 0) {
                let html = '';
                // Filter out the first one if it's the main intro, or just render everything except "Về Đơn vị chủ quản SMC"
                const sectionsToRender = data.filter(item => item.sectionName !== 'Về Đơn vị chủ quản SMC');
                
                sectionsToRender.forEach((sec, index) => {
                    const img = sec.imageUrl || 'images/default-project.png';
                    // Alternate row layout
                    const rowClass = (index % 2 !== 0) ? 'vis-mis-row row-reverse' : 'vis-mis-row';
                    
                    html += `
                    <div class="${rowClass}">
                        <div class="vis-mis-text">
                            <div class="accent-line"></div>
                            <h2>${sec.sectionName}</h2>
                            <div>${sec.content}</div>
                        </div>
                        <div class="vis-mis-image">
                            <img src="${img}" alt="${sec.sectionName}">
                        </div>
                    </div>
                    `;
                });
                container.innerHTML = html;
            }
        }).catch(err => console.error("Error loading about sections", err));
});
