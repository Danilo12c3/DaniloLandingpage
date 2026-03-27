
  document.addEventListener("DOMContentLoaded", () => {

      // ========================
      // NAVBAR SCROLL EFFECT
      // ========================
      const navbar = document.getElementById("navbar");

      window.addEventListener("scroll", () => {
          if (window.scrollY > 50) {
              navbar.classList.add("scrolled");
          } else {
              navbar.classList.remove("scrolled");
          }
      });

      // ========================
      // MENÚ HAMBURGUESA (MÓVIL)
      // ========================
      const navToggle = document.querySelector(".nav-toggle");
      const navLinks = document.querySelector(".nav-links");

      navToggle.addEventListener("click", () => {
          navToggle.classList.toggle("active");
          navLinks.classList.toggle("open");
      });

      navLinks.querySelectorAll("a").forEach(link => {
          link.addEventListener("click", () => {
              navToggle.classList.remove("active");
              navLinks.classList.remove("open");
          });
      });

      // ========================
      // ANIMACIONES AL HACER SCROLL
      // ========================
      const animatedElements = document.querySelectorAll(".animate-fade");

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("visible");
                  observer.unobserve(entry.target);
              }
          });
      }, {
          threshold: 0.15
      });

      animatedElements.forEach(el => observer.observe(el));

      // ========================
      // SMOOTH SCROLL EN NAV LINKS
      // ========================
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener("click", (e) => {
              const targetId = anchor.getAttribute("href");
              if (targetId === "#") return;

              const target = document.querySelector(targetId);
              if (target) {
                  e.preventDefault();
                  const navHeight = navbar.offsetHeight;
                  const targetPosition = target.offsetTop - navHeight - 16;

                  window.scrollTo({
                      top: targetPosition,
                      behavior: "smooth"
                  });
              }
          });
      });

      // ========================
      // PROYECTO CARDS - CLICK
      // ========================
      const proyectos = document.querySelectorAll(".project-card");

      proyectos.forEach(proyecto => {
          proyecto.addEventListener("click", (e) => {
              if (e.target.closest(".project-links a")) return;
              proyecto.style.borderColor = "var(--accent)";
              setTimeout(() => {
                  proyecto.style.borderColor = "";
              }, 600);
          });
      });

      // ========================
      // ACTIVE LINK EN SCROLL
      // ========================
      const sections = document.querySelectorAll("section[id]");
      const navAnchors = document.querySelectorAll(".nav-links a");

      const highlightNav = () => {
          const scrollPos = window.scrollY + navbar.offsetHeight + 40;

          sections.forEach(section => {
              const top = section.offsetTop;
              const height = section.offsetHeight;
              const id = section.getAttribute("id");

              if (scrollPos >= top && scrollPos < top + height) {
                  navAnchors.forEach(a => a.classList.remove("active"));
                  const active = document.querySelector(`.nav-links a[href="#${id}"]`);
                  if (active) active.classList.add("active");
              }
          });
      };

      window.addEventListener("scroll", highlightNav);
      highlightNav();
  });

  Y agrega esto al final de tu CSS para el link activo en la navegación:

  .nav-links a.active {
      color: var(--accent);
  }

  .nav-links a.active::after {
      width: 100%;
  }