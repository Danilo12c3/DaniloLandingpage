
  // ===== Navbar scroll effect =====
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // ===== Mobile menu toggle =====
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
          menuToggle.classList.remove('active');
          navLinks.classList.remove('open');
      });
  });

  // ===== Active nav link on scroll =====
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

  // ===== Animate elements on scroll (IntersectionObserver) =====
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');

              // Animate skill bars inside the element
              entry.target.querySelectorAll('.skill-fill').forEach(bar => {
                  bar.style.width = bar.dataset.level + '%';
              });

              // If the element itself is a skill-fill bar
              if (entry.target.classList.contains('skill-fill')) {
                  entry.target.style.width = entry.target.dataset.level + '%';
              }
          }
      });
  }, { threshold: 0.1 });

  document.querySelectorAll('.skill-card, .project-card').forEach(el => {
      observer.observe(el);
  });

  // ===== Counter animation =====
  function animateCounters() {
      const counters = document.querySelectorAll('.stat-number');

      counters.forEach(counter => {
          const target = +counter.dataset.target;
          const rect = counter.getBoundingClientRect();

          if (rect.top < window.innerHeight - 50 && !counter.dataset.done) {
              counter.dataset.done = 'true';
              let current = 0;
              const step = Math.max(1, Math.floor(target / 40));
              const interval = setInterval(() => {
                  current += step;
                  if (current >= target) {
                      current = target;
                      clearInterval(interval);
                  }
                  counter.textContent = current;
              }, 30);
          }
      });
  }

  window.addEventListener('scroll', animateCounters);
  window.addEventListener('load', animateCounters);

  // ===== Contact form =====
  document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const btn = this.querySelector('button[type="submit"]');
      const originalText = btn.textContent;

      btn.textContent = 'Enviado!';
      btn.style.background = '#28c840';

      setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          this.reset();
      }, 2000);
  });
