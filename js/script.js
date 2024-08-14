document.addEventListener('DOMContentLoaded', () => {
    const labels = document.querySelectorAll('.accordion .label');

    labels.forEach(label => {
        label.addEventListener('click', () => {
            const contentBx = label.parentElement;
            const content = contentBx.querySelector('.content');

            const isActive = contentBx.classList.contains('active');

            document.querySelectorAll('.accordion .contentBx').forEach(item => {
                item.classList.remove('active');
            });

            if (!isActive) {
                contentBx.classList.add('active');
            }
        });
    });
});
