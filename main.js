/* ===== MENU SHOW AND HIDDEN ===== */
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close');

// SHOW MENU
toggleMenu.addEventListener('click', () => {
    navMenu.classList.add('show');
});

// HIDE MENU
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

/* ===== MOUSEMOVE HOME IMG ===== */
document.addEventListener('mousemove', move);
function move(e) {
    document.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 120;
        const y = (window.innerHeight - e.pageY * speed) / 120;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

/* ===== GSAP ANIMATIONS ===== */
gsap.from('.nav__logo, .nav__toggle', { opacity: 0, duration: 1, delay: 0.2, y: 10 });
gsap.from('.nav__item', { opacity: 0, duration: 1, delay: 0.3, y: 30, stagger: 0.2 });
gsap.from('.home__title', { opacity: 0, duration: 1, delay: 0.4, y: 30 });
gsap.from('.home__description', { opacity: 0, duration: 1, delay: 0.5, y: 30 });
gsap.from('.home__button', { opacity: 0, duration: 1, delay: 0.6, y: 30 });
gsap.from('.home__img', { opacity: 0, duration: 1, delay: 0.7, y: 30 });
