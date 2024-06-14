document.addEventListener('DOMContentLoaded', function() {
    const brandTypeSelect = document.getElementById('brand-type');
    const tooltip = document.querySelector('.tooltip');

    brandTypeSelect.addEventListener('mouseenter', function() {
        tooltip.style.display = 'block';
    });

    brandTypeSelect.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none';
    });
});
