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

// ===== EFECTO DE JUEGO DE COLORES: Encendido de Neón Blanco =====
function activarGlowEnPagina() {
    const estiloNeon = '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)';
    const estiloNeonFuerte = '0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.3)';

    const logoSpan = document.querySelector('.logo span');
    if (logoSpan) logoSpan.style.textShadow = estiloNeon;

    const greeting = document.querySelector('.hero-greeting');
    if (greeting) greeting.style.textShadow = estiloNeon;

    document.querySelectorAll('.section-title').forEach(title => {
        title.style.textShadow = estiloNeonFuerte;
    });

    document.querySelectorAll('.skill-card h3, .project-card h3').forEach(cardTitle => {
        cardTitle.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.7)';
    });
}

// ===== Animaciones de Salto de Página (Scroll Reveal) =====
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Encender título de sección al aparecer
            const title = entry.target.querySelector('.section-title');
            if (title) {
                title.style.textShadow = '0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.3)';
            }
            observer.unobserve(entry.target); 
        }
    });
}, revealOptions);

document.querySelectorAll('.fade-section').forEach(section => {
    revealObserver.observe(section);
});

// ===== Gestión del Formulario de Contacto (Efecto NEÓN BLANCO) =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.textContent;

        // Activación de tonos Neón Blanco
        btn.textContent = '¡Mensaje Enviado!';
        btn.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
        btn.style.color = '#ffffff';
        btn.style.borderColor = '#ffffff';
        btn.style.boxShadow = '0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.4), inset 0 0 15px rgba(255,255,255,0.5)';
        btn.style.textShadow = '0 0 5px #ffffff, 0 0 10px #ffffff';
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

// ===== INICIALIZACIÓN: Activamos los efectos al cargar =====
window.addEventListener('load', () => {
    activarGlowEnPagina();
});