/* ── Navbar hamburger ── */
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu   = document.getElementById('navbarMenu');
if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
    document.querySelectorAll('.navbar-link, .navbar-cta').forEach(link => {
        link.addEventListener('click', () => {
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
        });
    });
}
