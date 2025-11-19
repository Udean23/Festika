document.addEventListener('DOMContentLoaded', function () {
    const filterOptions = document.querySelectorAll('.filter-option');
    const elements = document.querySelectorAll('.element');
    let currentFilter = null;
    let clickTimer = null;

    function resetFilter() {
        elements.forEach(element => {
            element.classList.remove('filtered-out');
        });
        filterOptions.forEach(option => {
            const filterElement = option.querySelector('.filter-element');
            filterElement.classList.remove('active');
            filterElement.classList.add('default');
        });
        currentFilter = null;
    }

    function applyFilter(category) {
        elements.forEach(element => {
            if (element.classList.contains(category)) {
                element.classList.remove('filtered-out');
            } else {
                element.classList.add('filtered-out');
            }
        });

        filterOptions.forEach(option => {
            const filterElement = option.querySelector('.filter-element');
            if (option.getAttribute('data-category') === category) {
                filterElement.classList.add('active');
                filterElement.classList.remove('default');
            } else {
                filterElement.classList.remove('active');
                filterElement.classList.add('default');
            }
        });

        currentFilter = category;
    }

    filterOptions.forEach(option => {
        option.addEventListener('click', function (e) {
            const category = this.getAttribute('data-category');

            if (clickTimer === null) {
                clickTimer = setTimeout(() => {
                    if (currentFilter === category) {
                        resetFilter();
                    } else {
                        applyFilter(category);
                    }
                    clickTimer = null;
                });
            }
        });

        option.addEventListener('dblclick', function (e) {
            clearTimeout(clickTimer);
            clickTimer = null;
            resetFilter();
            e.preventDefault();
        });
    });

    document.addEventListener('click', function (e) {
        const isFilterClick = e.target.closest('.filter-option') ||
            e.target.closest('.category-filter');

        if (!isFilterClick && currentFilter !== null) {
            resetFilter();
        }
    });

    resetFilter();
});

function createPeriodicTable() {
    const tableContainer = document.getElementById('periodic-table');

    tableContainer.innerHTML = '';

    periodicTable.forEach(element => {
        const position = elementPositions[element.atomicNumber];

        if (position) {
            const elementDiv = document.createElement('div');
            elementDiv.className = `element ${position.category}`;
            elementDiv.style.gridRow = position.row;
            elementDiv.style.gridColumn = position.col;
            elementDiv.setAttribute('data-atomic', element.atomicNumber);
            elementDiv.setAttribute('data-symbol', element.symbol);
            elementDiv.setAttribute('data-name', element.name);
            elementDiv.setAttribute('data-category', position.category);

            elementDiv.innerHTML = `
              <div class="number">${element.atomicNumber}</div>
              <div class="symbol">${element.symbol}</div>
              <div class="name">${element.name}</div>
              <div class="mass">${element.relativeAtomicMass}</div>
            `;

            tableContainer.appendChild(elementDiv);
        }
    });
}

function setupFilter() {
    const filterOptions = document.querySelectorAll('.filter-option');
    const elements = document.querySelectorAll('.element');
    let currentFilter = null;
    let clickTimer = null;

    function resetFilter() {
        elements.forEach(element => {
            element.classList.remove('filtered-out');
        });
        filterOptions.forEach(option => {
            const filterElement = option.querySelector('.filter-element');
            filterElement.classList.remove('active');
            filterElement.classList.add('default');
        });
        currentFilter = null;
    }

    function applyFilter(category) {
        elements.forEach(element => {
            if (element.classList.contains(category)) {
                element.classList.remove('filtered-out');
            } else {
                element.classList.add('filtered-out');
            }
        });

        filterOptions.forEach(option => {
            const filterElement = option.querySelector('.filter-element');
            if (option.getAttribute('data-category') === category) {
                filterElement.classList.add('active');
                filterElement.classList.remove('default');
            } else {
                filterElement.classList.remove('active');
                filterElement.classList.add('default');
            }
        });

        currentFilter = category;
    }

    filterOptions.forEach(option => {
        option.addEventListener('click', function (e) {
            const category = this.getAttribute('data-category');

            if (clickTimer === null) {
                clickTimer = setTimeout(() => {
                    if (currentFilter === category) {
                        resetFilter();
                    } else {
                        applyFilter(category);
                    }
                    clickTimer = null;
                }, 200);
            }
        });

        option.addEventListener('dblclick', function (e) {
            clearTimeout(clickTimer);
            clickTimer = null;
            resetFilter();
            e.preventDefault();
        });
    });

    document.addEventListener('click', function (e) {
        const isFilterClick = e.target.closest('.filter-option') ||
            e.target.closest('.category-filter');

        if (!isFilterClick && currentFilter !== null) {
            resetFilter();
        }
    });

    resetFilter();
}

document.addEventListener('DOMContentLoaded', function () {
    createPeriodicTable();
    setupFilter();
});

const droppedElements = {
    1: { symbol: '', name: '', count: 0, atomicNumber: null },
    2: { symbol: '', name: '', count: 0, atomicNumber: null },
    3: { symbol: '', name: '', count: 0, atomicNumber: null }
};

let draggedElement = null;
let scrollInterval = null;
let lastDroppedElement = null;
let isDragging = false;
let compatibleElements = new Set();
let isWheelScrolling = false;

function createPeriodicTable() {
    const tableContainer = document.getElementById('periodic-table');
    tableContainer.innerHTML = '';

    periodicTable.forEach(element => {
        const position = elementPositions[element.atomicNumber];

        if (position) {
            const elementDiv = document.createElement('div');
            elementDiv.className = `element ${position.category}`;
            elementDiv.style.gridRow = position.row;
            elementDiv.style.gridColumn = position.col;
            elementDiv.setAttribute('data-atomic', element.atomicNumber);
            elementDiv.setAttribute('data-symbol', element.symbol);
            elementDiv.setAttribute('data-name', element.name);
            elementDiv.setAttribute('data-category', position.category);
            elementDiv.setAttribute('draggable', 'true');

            elementDiv.innerHTML = `
              <div class="number">${element.atomicNumber}</div>
              <div class="symbol">${element.symbol}</div>
              <div class="name">${element.name}</div>
              <div class="mass">${element.relativeAtomicMass}</div>
            `;

            elementDiv.addEventListener('dragstart', handleDragStart);
            elementDiv.addEventListener('dragend', handleDragEnd);

            tableContainer.appendChild(elementDiv);
        }
    });
}

function setupFilter() {
    const filterOptions = document.querySelectorAll('.filter-option');
    const elements = document.querySelectorAll('.element');
    let currentFilter = null;
    let clickTimer = null;

    function resetFilter() {
        elements.forEach(element => {
            element.classList.remove('filtered-out');
        });
        filterOptions.forEach(option => {
            const filterElement = option.querySelector('.filter-element');
            filterElement.classList.remove('active');
            filterElement.classList.add('default');
        });
        currentFilter = null;
    }

    function applyFilter(category) {
        elements.forEach(element => {
            if (element.classList.contains(category)) {
                element.classList.remove('filtered-out');
            } else {
                element.classList.add('filtered-out');
            }
        });

        filterOptions.forEach(option => {
            const filterElement = option.querySelector('.filter-element');
            if (option.getAttribute('data-category') === category) {
                filterElement.classList.add('active');
                filterElement.classList.remove('default');
            } else {
                filterElement.classList.remove('active');
                filterElement.classList.add('default');
            }
        });

        currentFilter = category;
    }

    filterOptions.forEach(option => {
        option.addEventListener('click', function (e) {
            const category = this.getAttribute('data-category');

            if (clickTimer === null) {
                clickTimer = setTimeout(() => {
                    if (currentFilter === category) {
                        resetFilter();
                    } else {
                        applyFilter(category);
                    }
                    clickTimer = null;
                }, 200);
            }
        });

        option.addEventListener('dblclick', function (e) {
            clearTimeout(clickTimer);
            clickTimer = null;
            resetFilter();
            e.preventDefault();
        });
    });

    document.addEventListener('click', function (e) {
        const isFilterClick = e.target.closest('.filter-option') || e.target.closest('.category-filter');

        if (!isFilterClick && currentFilter !== null) {
            resetFilter();
        }
    });

    resetFilter();
}

function handleDragStart(e) {
    draggedElement = {
        symbol: this.getAttribute('data-symbol'),
        name: this.getAttribute('data-name'),
        atomicNumber: parseInt(this.getAttribute('data-atomic'))
    };

    isDragging = true;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text/html', this.innerHTML);

    enableWheelScroll();
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    isDragging = false;
    stopAutoScroll();
    disableWheelScroll();
}

function resetElementHighlight() {
    compatibleElements.clear();
    const allElements = document.querySelectorAll('.element');
    allElements.forEach(element => {
        element.classList.remove('compatible', 'dimmed');
    });
}

function updateCompatibilityHighlight() {
    const currentElements = [];

    for (let zone in droppedElements) {
        if (droppedElements[zone].atomicNumber) {
            for (let i = 0; i < droppedElements[zone].count; i++) {
                currentElements.push(droppedElements[zone].atomicNumber);
            }
        }
    }

    if (currentElements.length === 0) {
        resetElementHighlight();
        return;
    }

    compatibleElements.clear();

    interstellarMolecules.forEach(molecule => {
        const moleculeElements = [...molecule.composedOf];
        const currentSorted = [...currentElements];

        if (moleculeElements.length > currentSorted.length) {
            let tempMolecule = [...moleculeElements];
            let allMatched = true;
            
            for (let current of currentSorted) {
                let found = false;
                for (let i = 0; i < tempMolecule.length; i++) {
                    if (tempMolecule[i] === current) {
                        tempMolecule.splice(i, 1);
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    allMatched = false;
                    break;
                }
            }

            if (allMatched && tempMolecule.length > 0) {
                const remainingUnique = [...new Set(tempMolecule)];
                remainingUnique.forEach(element => {
                    compatibleElements.add(element);
                });
            }
        }
    });

    const allElements = document.querySelectorAll('.element');

    if (compatibleElements.size === 0) {
        allElements.forEach(element => {
            element.classList.add('dimmed');
            element.classList.remove('compatible');
        });
    } else {
        allElements.forEach(element => {
            const atomicNum = parseInt(element.getAttribute('data-atomic'));
            if (compatibleElements.has(atomicNum)) {
                element.classList.remove('dimmed');
                element.classList.remove('compatible');
            } else {
                element.classList.add('dimmed');
                element.classList.remove('compatible');
            }
        });
    }
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'copy';

    const scrollThreshold = 150;
    const scrollSpeed = 8;
    const viewportHeight = window.innerHeight;
    const mouseY = e.clientY;

    if (mouseY < scrollThreshold) {
        startAutoScroll(-scrollSpeed);
    } else if (mouseY > viewportHeight - scrollThreshold) {
        startAutoScroll(scrollSpeed);
    } else {
        stopAutoScroll();
    }

    return false;
}

function startAutoScroll(speed) {
    if (!scrollInterval) {
        scrollInterval = setInterval(() => {
            window.scrollBy(0, speed);
        }, 16);
    }
}

function stopAutoScroll() {
    if (scrollInterval) {
        clearInterval(scrollInterval);
        scrollInterval = null;
    }
}

function enableWheelScroll() {
    isWheelScrolling = true;
    document.addEventListener('wheel', handleWheelScroll, { passive: false });
}

function disableWheelScroll() {
    isWheelScrolling = false;
    document.removeEventListener('wheel', handleWheelScroll);
}

function handleWheelScroll(e) {
    if (isDragging) {
        e.preventDefault();
        window.scrollBy({
            top: e.deltaY,
            behavior: 'auto'
        });
    }
}

function handleDragEnter(e) {
    this.classList.add('drag-over');
}

function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }

    this.classList.remove('drag-over');
    stopAutoScroll();

    const targetZone = parseInt(this.getAttribute('data-target'));

    if (draggedElement) {
        let existingZone = null;

        for (let zone in droppedElements) {
            if (droppedElements[zone].symbol === draggedElement.symbol && zone != targetZone) {
                existingZone = zone;
                break;
            }
        }

        if (existingZone) {
            droppedElements[existingZone].count++;
            updateDropZone(existingZone);
        } else {
            if (droppedElements[targetZone].symbol === draggedElement.symbol) {
                droppedElements[targetZone].count++;
            } else {
                droppedElements[targetZone] = {
                    symbol: draggedElement.symbol,
                    name: draggedElement.name,
                    atomicNumber: draggedElement.atomicNumber,
                    count: 1
                };
            }
            updateDropZone(targetZone);
        }

        lastDroppedElement = draggedElement.atomicNumber;
        updateResult();
        updateElementInfo(draggedElement.atomicNumber);
        updateCompatibilityHighlight();
    }

    isDragging = false;

    return false;
}

function updateDropZone(zoneNumber) {
    const dropZone = document.querySelector(`[data-zone="${zoneNumber}"]`);
    const symbolSpan = dropZone.querySelector('.element-symbol');
    const countSpan = dropZone.querySelector('.element-count');
    const nameSpan = dropZone.querySelector('.element-name');

    const element = droppedElements[zoneNumber];

    if (element.symbol) {
        symbolSpan.textContent = element.symbol;
        nameSpan.textContent = element.name;

        if (element.count > 1) {
            countSpan.textContent = element.count;
            countSpan.classList.add('show');
        } else {
            countSpan.classList.remove('show');
        }
    } else {
        symbolSpan.textContent = '';
        nameSpan.textContent = '';
        countSpan.classList.remove('show');
    }
}

function updateResult() {
    const resultFormula = document.getElementById('result-formula');
    const resultName = document.getElementById('result-name');

    let formula = '';
    let atomicNumbers = [];

    for (let i = 1; i <= 3; i++) {
        const element = droppedElements[i];
        if (element.symbol) {
            for (let j = 0; j < element.count; j++) {
                const elementData = periodicTable.find(e => e.symbol === element.symbol);
                if (elementData) {
                    atomicNumbers.push(elementData.atomicNumber);
                }
            }
            formula += element.symbol;
            if (element.count > 1) {
                formula += `<sub style="font-size: 0.6em;">${element.count}</sub>`;
            }
        }
    }

    if (formula) {
        resultFormula.innerHTML = formula;

        const matchedMolecule = interstellarMolecules.find(molecule => {
            if (molecule.composedOf.length !== atomicNumbers.length) return false;

            const sortedComposed = [...molecule.composedOf].sort((a, b) => a - b);
            const sortedAtomic = [...atomicNumbers].sort((a, b) => a - b);

            return sortedComposed.every((num, idx) => num === sortedAtomic[idx]);
        });

        if (matchedMolecule) {
            resultName.textContent = matchedMolecule.name;
            updateMoleculeInfo(matchedMolecule);
        } else {
            resultName.textContent = 'Senyawa Tidak Dikenal';
            updateMoleculeInfo(null);
        }
    } else {
        resultFormula.textContent = '';
        resultName.textContent = '';
        updateMoleculeInfo(null);
    }
}

function updateElementInfo(atomicNumber) {
    const element = periodicTable.find(e => e.atomicNumber === atomicNumber);

    if (element) {
        document.getElementById('info-symbol').textContent = element.symbol;
        document.getElementById('info-title').textContent = `${element.name} (${element.symbol}) ${element.atomicNumber}`;
        document.getElementById('info-description').textContent = element.description;

        const detailsHTML = `
            <p><span class="font-semibold">Simbol:</span> ${element.symbol}</p>
            <p><span class="font-semibold">Massa atom:</span> ${element.relativeAtomicMass} u</p>
            <p><span class="font-semibold">Kepadatan:</span> ${element.kepadatan}</p>
            <p><span class="font-semibold">Mendidih:</span> ${element.mendidih}</p>
            <p><span class="font-semibold">Melebur:</span> ${element.melebur}</p>
            <p><span class="font-semibold">Ditemukan oleh:</span> ${element.ditemukan}</p>
            <p><span class="font-semibold">Tahun penemuan:</span> ${element.tahun}</p>
        `;

        document.getElementById('info-details').innerHTML = detailsHTML;
    }
}

function updateMoleculeInfo(molecule) {
    const titleElement = document.getElementById('molecule-title');
    const descElement = document.getElementById('molecule-description');

    if (molecule) {
        titleElement.textContent = molecule.name;
        descElement.textContent = getMoleculeDescription(molecule);
    } else {
        titleElement.textContent = 'Hasil Reaksi';
        descElement.textContent = 'Kombinasikan unsur-unsur pada kotak di atas untuk membentuk molekul';
    }
}

function getMoleculeDescription(molecule) {
    const searchMol = interstellarMolecules.find(mol => mol.name === molecule.name);

    return searchMol.descriptions || `${molecule.name} (${molecule.formula}) adalah molekul yang terdiri dari kombinasi unsur-unsur yang Anda pilih. Molekul ini dapat ditemukan di ruang antarbintang.`;
}

function setupDropZones() {
    const dropTargets = document.querySelectorAll('.drop-target');

    dropTargets.forEach(target => {
        target.addEventListener('dragover', handleDragOver);
        target.addEventListener('dragenter', handleDragEnter);
        target.addEventListener('dragleave', handleDragLeave);
        target.addEventListener('drop', handleDrop);

        target.addEventListener('click', function () {
            const targetZone = parseInt(this.getAttribute('data-target'));
            droppedElements[targetZone] = { symbol: '', name: '', count: 0, atomicNumber: null };
            updateDropZone(targetZone);
            updateResult();
            updateCompatibilityHighlight();
        });
    });
}

function initializeDefaultElement() {
    if (lastDroppedElement === null && periodicTable.length > 0) {
        updateElementInfo(1);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    createPeriodicTable();
    setupFilter();
    setupDropZones();
    initializeDefaultElement();
});