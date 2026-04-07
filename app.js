// ===== Efecto Scroll Navbar =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// ===== Resaltar Enlace Activo en Scroll =====
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (link) {
            link.classList.toggle('active', scrollY >= top && scrollY < top + height);
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ===== Animaciones de Salto de Página (Scroll Reveal) =====
// Detecta cuando una sección entra en la pantalla para animarla
const revealOptions = {
    threshold: 0.15, // La animación salta cuando el 15% de la sección es visible
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Anima solo una vez
        }
    });
}, revealOptions);

// Aplicar el observador a todas las secciones con la clase 'fade-section'
document.querySelectorAll('.fade-section').forEach(section => {
    revealObserver.observe(section);
});

// ===== Gestión del Formulario de Contacto =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.textContent;

        btn.textContent = 'Mensaje Enviado';
        btn.style.backgroundColor = 'rgba(56, 189, 248, 0.1)';
        btn.style.color = '#38bdf8';
        btn.style.borderColor = '#38bdf8';

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.backgroundColor = 'transparent';
            this.reset();
        }, 3000);
    });
}