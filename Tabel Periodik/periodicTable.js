document.addEventListener('DOMContentLoaded', function() {
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
        option.addEventListener('click', function(e) {
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

        option.addEventListener('dblclick', function(e) {
            clearTimeout(clickTimer);
            clickTimer = null;
            resetFilter();
            e.preventDefault();
        });
    });

    document.addEventListener('click', function(e) {
        const isFilterClick = e.target.closest('.filter-option') || 
                             e.target.closest('.category-filter');
        
        if (!isFilterClick && currentFilter !== null) {
            resetFilter();
        }
    });

    resetFilter();
});