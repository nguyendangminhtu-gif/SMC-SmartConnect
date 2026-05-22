document.addEventListener("DOMContentLoaded", function() {
    
    let allProjects = [];
    let currentPage = 1;
    const itemsPerPage = 1;

    function renderProjects() {
        const container = document.getElementById('projects-container');
        const pagination = document.getElementById('pagination-container');
        if (!container) return;

        if (allProjects.length === 0) {
            container.innerHTML = '<p class="text-center">Chưa có dự án nào.</p>';
            if(pagination) pagination.innerHTML = '';
            return;
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const currentProject = allProjects[startIndex];
        const img = currentProject.imageUrl || 'images/default-project.png';

        // Split description by period or newline to make bullet points if possible, otherwise just one bullet
        let descHtml = '';
        let sentences = currentProject.description.split(/(?:\. |\n)/).filter(s => s.trim().length > 0);
        if(sentences.length === 0) sentences = [currentProject.description];
        
        sentences.forEach(s => {
            let text = s.trim();
            if(!text.endsWith('.')) text += '.';
            descHtml += `
            <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                <div style="width: 12px; height: 12px; background-color: #ffd700; transform: rotate(45deg); margin-top: 6px; margin-right: 15px; flex-shrink: 0;"></div>
                <div style="color: var(--text-dark); font-size: 16px; line-height: 1.5;">${text}</div>
            </div>`;
        });

        container.innerHTML = `
        <div style="background-color: #ffffff; border-radius: 8px; padding: 20px 0; display: flex; flex-wrap: wrap; align-items: center; gap: 40px;">
            <div style="flex: 1 1 300px; max-width: 450px; text-align: center; margin: 0 auto;">
                <img src="${img}" alt="${currentProject.title}" style="width: 100%; border-radius: 8px; object-fit: cover; box-shadow: 0 10px 20px rgba(0,0,0,0.08);">
            </div>
            <div style="flex: 2 1 400px;">
                <h2 style="color: var(--primary-blue); font-weight: 800; font-family: 'Inter', sans-serif; margin-bottom: 30px; text-transform: uppercase;">${currentProject.title}</h2>
                <div>
                    ${descHtml}
                </div>
            </div>
        </div>
        `;

        // Render Pagination
        if (pagination && allProjects.length > 1) {
            let pageHtml = '<div style="display: flex; justify-content: center; gap: 10px; margin-top: 40px;">';
            for (let i = 1; i <= allProjects.length; i++) {
                const isActive = (i === currentPage);
                pageHtml += `
                <button onclick="changePage(${i})" style="width: 40px; height: 40px; border-radius: 5px; border: none; background-color: ${isActive ? '#1a3b8c' : '#f0f0f0'}; color: ${isActive ? 'white' : '#333'}; font-weight: 600; cursor: pointer; transition: 0.3s; box-shadow: ${isActive ? '0 4px 10px rgba(26,59,140,0.3)' : 'none'};">
                    ${i}
                </button>`;
            }
            pageHtml += '</div>';
            pagination.innerHTML = pageHtml;
        }
    }

    window.changePage = function(page) {
        currentPage = page;
        renderProjects();
        document.querySelector('.projects-wrapper').scrollIntoView({ behavior: 'smooth' });
    };

    // Load Projects
    fetch('/api/projects')
        .then(res => res.json())
        .then(data => {
            if (data && data.length > 0) {
                allProjects = data;
                renderProjects();
            }
        }).catch(err => console.error("Error loading projects", err));

    // Load Partners
    fetch('/api/partners')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('partners-container');
            if (container && data && data.length > 0) {
                let html = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; align-items: center; justify-items: center; width: 100%;">';
                // Force exactly 4 columns on desktop by checking screen width, or just use grid-template-columns: repeat(4, 1fr) for desktop and let it wrap.
                // Since inline CSS media queries are hard, we use auto-fit which is responsive. 
                // Wait, if there are exactly 6, auto-fit might make 3 on each row.
                // Let's enforce 4 columns by adding a class or just grid-template-columns.
                html = '<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; align-items: center; justify-items: center; width: 100%;" class="partners-grid-custom">';
                data.forEach(partner => {
                    const img = partner.logoUrl || 'images/default-partner.png';
                    html += `
                        <div style="padding: 10px; display: flex; align-items: center; justify-content: center; width: 100%; height: 100px;">
                            <img src="${img}" alt="${partner.name}" style="max-width: 100%; max-height: 80px; object-fit: contain;">
                        </div>
                    `;
                });
                html += '</div>';
                // Add a small style block to make the grid responsive on mobile
                html += `<style>
                    @media (max-width: 768px) {
                        .partners-grid-custom {
                            grid-template-columns: repeat(2, 1fr) !important;
                            gap: 20px !important;
                        }
                    }
                </style>`;
                container.innerHTML = html;
            }
        }).catch(err => console.error("Error loading partners", err));
});
