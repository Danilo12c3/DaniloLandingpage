// ===== Efecto Scroll Navbar =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    }
});

// ===== Resaltar Enlace Activo en Scroll =====
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollY = window.scrollY + 120;

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

// ===== Animaciones de entrada =====
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
});

document.querySelectorAll('.fade-section').forEach(section => {
    revealObserver.observe(section);
});

// ===== Formulario de Contacto =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.textContent;

        btn.textContent = '¡Mensaje enviado!';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            this.reset();
        }, 2800);
    });
<<<<<<< HEAD
}
=======
}
>>>>>>> f0c728622f7239205e21e2ea51ac382e04e2fe28
