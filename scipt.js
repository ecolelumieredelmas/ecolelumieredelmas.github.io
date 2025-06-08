const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

  burger.addEventListener('click', (e) => {
    e.stopPropagation(); // empêche de fermer le menu immédiatement
    menu.classList.toggle('hidden');
  });

  // Fermer le menu si on clique en dehors
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnBurger = burger.contains(e.target);

    if (!isClickInsideMenu && !isClickOnBurger && !menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
    }
  });

  document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.add('hidden');
  });
});

// Scroll suave para todos los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Validación básica del formulario
document.getElementById("contactForm").addEventListener("submit", function(e) {
  const email = this.email.value;
  const nombre = this.nombre.value;
  const mensaje = this.mensaje.value;

  if (!email || !nombre || !mensaje) {
    e.preventDefault();
    alert("Por favor completa todos los campos.");
  }
});

  const options = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, options);

  document.querySelectorAll('section.animation h2 span').forEach(span => {
    observer.observe(span);
  });
