const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Add !important to navbar-scrolled background-color
html = html.replace(
    'background-color: rgba(15, 23, 42, 0.95);',
    'background-color: rgba(15, 23, 42, 0.95) !important;'
);

// Remove bg-transparent and add it dynamically in JS
html = html.replace(
    `header.classList.add('navbar-scrolled', 'py-3');`,
    `header.classList.add('navbar-scrolled', 'py-3');
                    header.classList.remove('bg-transparent');`
);

html = html.replace(
    `header.classList.add('py-4');`,
    `header.classList.add('py-4', 'bg-transparent');`
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed navbar background issue');
