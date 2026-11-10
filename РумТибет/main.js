const header = document.querySelector('.header')
const mainFon = document.querySelector('.main-fon')
const burger = document.querySelector('.header__burger')
const navigation = document.querySelector('.header__navigation')

const updateHeader = () => {
    if (!header || !mainFon) return;

    const scrollLimit = mainFon.offsetHeight - header.offsetHeight;

    if (window.scrollY > scrollLimit) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
}

window.addEventListener('scroll', updateHeader, { passive: true });

window.addEventListener('resize', updateHeader);

updateHeader();


if (header && burger && navigation) {

    burger.addEventListener('click', () => {

        const isOpen = header.classList.toggle('header--menu-open');

        burger.setAttribute('aria-expanded', isOpen);
    });

    navigation.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {
            closeMenu();
        });

    });

    document.addEventListener('keydown', event => {

        if (event.key === 'Escape') {
            closeMenu();
        }

    });

    document.addEventListener('click', event => {

        if (!header.contains(event.target)) {
            closeMenu();
        }
    });

    const closeMenu = () => {
        header.classList.remove('header--menu-open');

        burger.setAttribute('aria-expanded', 'false');
    }
}