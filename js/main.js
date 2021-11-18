window.addEventListener('DOMContentLoaded', () => {
    const offLink = document.querySelectorAll('.off-link');

    offLink.forEach(i => {
        i.addEventListener('click', e => {
            e.preventDefault();
        });
    });

    const btnMenu = document.querySelector('.header__btn-menu'),
          mobMenu = document.querySelector('.mob-menu'),
          doc = document.querySelector('.document');

    btnMenu.addEventListener('click', () => {
        mobMenu.classList.toggle('mob-menu-open');
        doc.classList.toggle('document-close');
    });
});