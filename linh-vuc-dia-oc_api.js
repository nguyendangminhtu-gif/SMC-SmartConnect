document.addEventListener("DOMContentLoaded", function() {
    fetch('/api/industry-sections/DIA_OC')
        .then(res => res.json())
        .then(data => {
            if (data && data.length > 0) {
                const section = data[0];
                
                // Update text
                if (section.title) {
                    const titleEl = document.querySelector('.sector-section-title h2');
                    if(titleEl) titleEl.innerText = section.title;
                }
                if (section.content) {
                    const contentEl = document.querySelector('.sector-section-title p');
                    if(contentEl) contentEl.innerText = section.content;
                }
                
                // Update images
                if (section.imageUrl1) {
                    const bannerImg = document.querySelector('.images-three-grid img:nth-child(1)');
                    if(bannerImg) bannerImg.src = section.imageUrl1.startsWith('/') ? section.imageUrl1 : '/' + section.imageUrl1;
                }
                if (section.imageUrl2) {
                    const sideImg = document.querySelector('.steps-image-wrapper img');
                    if(sideImg) sideImg.src = section.imageUrl2.startsWith('/') ? section.imageUrl2 : '/' + section.imageUrl2;
                }
                if (section.imageUrl3) {
                    const otherImg1 = document.querySelector('.images-three-grid img:nth-child(2)');
                    const otherImg2 = document.querySelector('.images-three-grid img:nth-child(3)');
                    const otherImg3 = document.querySelector('.images-two-grid img:nth-child(1)');
                    const otherImg4 = document.querySelector('.images-two-grid img:nth-child(2)');
                    
                    if(otherImg1) otherImg1.src = section.imageUrl3.startsWith('/') ? section.imageUrl3 : '/' + section.imageUrl3;
                    if(otherImg2) otherImg2.src = section.imageUrl3.startsWith('/') ? section.imageUrl3 : '/' + section.imageUrl3;
                    if(otherImg3) otherImg3.src = section.imageUrl3.startsWith('/') ? section.imageUrl3 : '/' + section.imageUrl3;
                    if(otherImg4) otherImg4.src = section.imageUrl3.startsWith('/') ? section.imageUrl3 : '/' + section.imageUrl3;
                }
            }
        })
        .catch(err => console.error("Error loading DIA_OC sections:", err));
});
