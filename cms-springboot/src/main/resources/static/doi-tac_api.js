document.addEventListener("DOMContentLoaded", function() {
    
    // Load Projects
    fetch('/api/projects/projects')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('projects-container');
            if (container && data && data.length > 0) {
                let html = '';
                data.forEach(proj => {
                    const img = proj.imageUrl || 'images/default-project.png';
                    html += `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100" style="border: none; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                            <img src="${img}" class="card-img-top" alt="${proj.title}" style="height: 200px; object-fit: cover;">
                            <div class="card-body">
                                <h5 class="card-title" style="color: var(--primary-blue); font-weight: 700;">${proj.title}</h5>
                                <p class="card-text" style="color: var(--text-gray);">${proj.description}</p>
                            </div>
                        </div>
                    </div>
                    `;
                });
                container.innerHTML = html;
            }
        }).catch(err => console.error("Error loading projects", err));

    // Load Partners
    fetch('/api/projects/partners')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('partners-container');
            if (container && data && data.length > 0) {
                let html = '';
                data.forEach(partner => {
                    const img = partner.logoUrl || 'images/default-partner.png';
                    html += `
                    <div class="col-md-3 col-6 mb-4 text-center">
                        <div style="background: white; padding: 20px; border-radius: 12px; border: 1px solid var(--border-color); height: 120px; display: flex; align-items: center; justify-content: center;">
                            <img src="${img}" alt="${partner.name}" style="max-width: 100%; max-height: 100%; object-fit: contain; filter: grayscale(100%); opacity: 0.7; transition: 0.3s;" onmouseover="this.style.filter='grayscale(0%)'; this.style.opacity='1';" onmouseout="this.style.filter='grayscale(100%)'; this.style.opacity='0.7';">
                        </div>
                    </div>
                    `;
                });
                container.innerHTML = html;
            }
        }).catch(err => console.error("Error loading partners", err));
});
