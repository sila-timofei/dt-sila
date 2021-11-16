window.addEventListener('DOMContentLoaded', () => {
    const offLink = document.querySelectorAll('.off-link');

    offLink.forEach(i => {
        i.addEventListener('click', e => {
            e.preventDefault();
        });
    });
});