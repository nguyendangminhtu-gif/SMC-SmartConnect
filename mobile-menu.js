document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }

    // Toggle submenus on mobile (Accordion style)
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger > a');
    const subDropdownTriggers = document.querySelectorAll('.dropdown-trigger-sub > a');

    // Handle level 1 dropdowns
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                e.stopPropagation();
                
                const currentDropdown = this.nextElementSibling;
                
                // Is this dropdown already open?
                const isCurrentlyOpen = currentDropdown && currentDropdown.classList.contains('show');

                // 1. Close ALL level 1 dropdowns
                document.querySelectorAll('.dropdown-trigger > .dropdown').forEach(drop => {
                    drop.classList.remove('show');
                });
                
                // 2. Close ALL level 2 dropdowns (resetting everything)
                document.querySelectorAll('.dropdown-trigger-sub > .sub-dropdown').forEach(subDrop => {
                    subDrop.classList.remove('show');
                });

                // 3. If it wasn't open, open it
                if (currentDropdown && !isCurrentlyOpen) {
                    currentDropdown.classList.add('show');
                }
            }
        });
    });

    // Handle level 2 sub-dropdowns
    subDropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                e.stopPropagation();
                
                const currentDropdown = this.nextElementSibling;
                
                // Is this dropdown already open?
                const isCurrentlyOpen = currentDropdown && currentDropdown.classList.contains('show');

                // 1. Close ALL level 2 sub-dropdowns first
                document.querySelectorAll('.dropdown-trigger-sub > .sub-dropdown').forEach(subDrop => {
                    subDrop.classList.remove('show');
                });

                // 2. If it wasn't open, open it
                if (currentDropdown && !isCurrentlyOpen) {
                    currentDropdown.classList.add('show');
                }
            }
        });
    });
});
