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
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, revealOptions);

document.querySelectorAll('.fade-section').forEach(section => {
    revealObserver.observe(section);
});

// ===== Gestión del Formulario de Contacto (Efecto NEÓN) =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.textContent;

        // Activación de tonos Neón Azul/Cyan
        btn.textContent = '¡Mensaje Enviado!';
        btn.style.backgroundColor = 'rgba(10, 255, 255, 0.1)';
        btn.style.color = '#0affff';
        btn.style.borderColor = '#0affff';
        // Creación del resplandor (Glow)
        btn.style.boxShadow = '0 0 10px #0affff, 0 0 20px #0affff, 0 0 40px #0affff, inset 0 0 10px rgba(10,255,255,0.5)';
        btn.style.textShadow = '0 0 5px #0affff, 0 0 10px #0affff';
        btn.style.transition = 'all 0.3s ease';

        setTimeout(() => {
            // Apagado del Neón
            btn.textContent = originalText;
            btn.style.backgroundColor = 'transparent';
            btn.style.color = '';
            btn.style.borderColor = '';
            btn.style.boxShadow = 'none';
            btn.style.textShadow = 'none';
            this.reset();
        }, 3000);
    });
}