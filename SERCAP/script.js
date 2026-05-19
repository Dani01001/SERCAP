// ===== NAVBAR: Toggle móvil =====
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu   = document.getElementById('navbarMenu');
navbarToggle.addEventListener('click', function () {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});
// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.navbar-link, .navbar-cta').forEach(function (link) {
    link.addEventListener('click', function () {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
    });
});
// ===== NAVBAR: Ocultar al hacer scroll hacia abajo =====
let lastScroll = 0;
const navbar   = document.getElementById('navbar');
window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        navbar.classList.remove('hidden');
        return;
    }
    if (currentScroll > lastScroll && currentScroll > 80) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScroll = currentScroll;
});
// ===== SCROLL ANIMATIONS (Intersection Observer) =====
const fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target); // una sola vez
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });
document.querySelectorAll('.fade-in').forEach(function (el) {
    fadeObserver.observe(el);
});
// ===== FUNCIÓN GENÉRICA PARA ANIMACIÓN DE CONTADORES =====
function animateNumber(el, target, suffix) {
    suffix = suffix || '';
    const duration  = 2000;
    const startTime = performance.now();
    function update(now) {
        const elapsed  = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutQuart para efecto de desaceleración
        const eased    = 1 - Math.pow(1 - progress, 4);
        el.textContent  = Math.floor(eased * target) + suffix;
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target + suffix;
        }
    }
    requestAnimationFrame(update);
}
// ===== CONTADORES DEL HERO =====
const heroCounterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            const el     = entry.target;
            const target = parseInt(el.getAttribute('data-hero-counter'), 10);
            const suffix = el.getAttribute('data-suffix') || '';
            animateNumber(el, target, suffix);
            heroCounterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });
document.querySelectorAll('[data-hero-counter]').forEach(function (el) {
    heroCounterObserver.observe(el);
});
// ===== CONTADORES DE LA SECCIÓN DE ESTADÍSTICAS =====
const statCounterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            const el     = entry.target;
            const target = parseInt(el.getAttribute('data-counter'), 10);
            const suffix = el.getAttribute('data-suffix') || '';
            animateNumber(el, target, suffix);
            statCounterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });
document.querySelectorAll('[data-counter]').forEach(function (el) {
    statCounterObserver.observe(el);
});
// ===== CARRUSEL DE TESTIMONIOS =====
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dotsContainer    = document.getElementById('carouselDots');
let currentSlide       = 0;
let autoPlayInterval;
// Crear dots dinámicamente
testimonialCards.forEach(function (_, index) {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    if (index === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', 'Ir al testimonio ' + (index + 1));
    dot.addEventListener('click', function () { goToSlide(index); });
    dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll('.carousel-dot');
function showSlide(n) {
    testimonialCards.forEach(function (card) { card.classList.remove('active'); });
    dots.forEach(function (dot)  { dot.classList.remove('active'); });
    currentSlide = (n + testimonialCards.length) % testimonialCards.length;
    testimonialCards[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}
function goToSlide(n)  { showSlide(n); resetAutoPlay(); }
function nextSlide()   { showSlide(currentSlide + 1); }
function prevSlide()   { showSlide(currentSlide - 1); }
function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(nextSlide, 5500);
}
document.getElementById('prevBtn').addEventListener('click', function () { prevSlide(); resetAutoPlay(); });
document.getElementById('nextBtn').addEventListener('click', function () { nextSlide(); resetAutoPlay(); });
// Arrancar auto-play
autoPlayInterval = setInterval(nextSlide, 5500);
// ===== FORMULARIO DE CONTACTO =====
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const data = {
        name:    document.getElementById('name').value,
        email:   document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };
    console.log('Formulario enviado:', data);
    alert('✅ ¡Mensaje enviado! Te contactaremos pronto.');
    this.reset();
});
