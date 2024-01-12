const filterItems = document.querySelectorAll(".article-item");

const filterFunc = function (selectedValue) {
    filterItems.forEach(item => {
        if (selectedValue === "all" || item.dataset.category === selectedValue) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
        let selectedValue = button.getAttribute('data-filter');
        filterFunc(selectedValue);
    });
});
