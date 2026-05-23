const fs = require('fs');

const htmlCurrent = fs.readFileSync('index.html', 'utf8');
const htmlOld = fs.readFileSync('index_old.html', 'utf8');

// Find the start of the grid in both files
const gridStartPattern = '<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">';
const sectionEndPattern = '</section>';

// Extract the correct grid block from old html
const oldGridStart = htmlOld.indexOf(gridStartPattern);
const oldGridEnd = htmlOld.indexOf('</div>\n            </div>\n        </section>', oldGridStart) + 6;
let correctGrid = htmlOld.substring(oldGridStart, oldGridEnd);

// Add the onclicks safely using exact string replacements or non-greedy regex without overlapping
correctGrid = correctGrid.replace(
    'class="inline-flex items-center text-blue-600 font-bold group-hover:text-white transition-colors">',
    'onclick="openModal(\'modal-service-1\'); return false;" class="inline-flex items-center text-blue-600 font-bold group-hover:text-white transition-colors">'
);

correctGrid = correctGrid.replace(
    'class="inline-flex items-center text-emerald-500 font-bold group-hover:text-white transition-colors">',
    'onclick="openModal(\'modal-service-2\'); return false;" class="inline-flex items-center text-emerald-500 font-bold group-hover:text-white transition-colors">'
);

correctGrid = correctGrid.replace(
    'class="inline-flex items-center text-amber-500 font-bold group-hover:text-white transition-colors">',
    'onclick="openModal(\'modal-service-3\'); return false;" class="inline-flex items-center text-amber-500 font-bold group-hover:text-white transition-colors">'
);

correctGrid = correctGrid.replace(
    'class="inline-flex items-center text-purple-500 font-bold group-hover:text-white transition-colors">',
    'onclick="openModal(\'modal-service-4\'); return false;" class="inline-flex items-center text-purple-500 font-bold group-hover:text-white transition-colors">'
);

// Extract the bad grid from current html
const currGridStart = htmlCurrent.indexOf(gridStartPattern);
const currGridEnd = htmlCurrent.indexOf('</div>\n            </div>\n        </section>', currGridStart) + 6;

// Replace the bad grid with the corrected grid
const finalHtml = htmlCurrent.substring(0, currGridStart) + correctGrid + htmlCurrent.substring(currGridEnd);

fs.writeFileSync('index.html', finalHtml);
console.log('Restored the services grid and added onclick handlers correctly.');
