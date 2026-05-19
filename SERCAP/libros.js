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

/* ── Filtro de niveles ── */
const filterBtns = document.querySelectorAll('.filter-btn');
const levelGroups = document.querySelectorAll('.level-group');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        levelGroups.forEach(g => {
            g.style.display = (f === 'all' || g.dataset.level === f) ? '' : 'none';
        });
    });
});

/* ── Fade-in al hacer scroll ── */
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
