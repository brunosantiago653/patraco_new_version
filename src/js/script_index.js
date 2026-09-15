/* ======================================
   Menú desplegable 
   ====================================== */
document.addEventListener('DOMContentLoaded', () => {

  // Declarar las variables
  const navToggle = document.querySelector('.navToggle');
  const navBar = document.getElementById('navbar-dropdown');
  const navClose = document.querySelector('.navClose');
  const links = navBar ? navBar.querySelectorAll('.link-menu, .link-menu-whatsapp') : [];

  if (!navToggle || !navBar) return;

  // Fondo oscuro (overlay)
  const overlay = document.createElement('div');
  overlay.classList.add('nav-overlay'); // ✅ corregido
  document.body.appendChild(overlay);

  // Script de detección si es celular o tablet
  const isMobile = () => window.matchMedia('(max-width: 1023px)').matches;

  // Abrir el menú
  const openMenu = () => {
    if (!isMobile()) return;
    navBar.classList.add('is-open'); // ✅ corregido
    overlay.classList.add('is-active');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Sirve para bloquear el scroll del fondo
  };

  // Cerrar el menú
  const closeMenu = () => {
    navBar.classList.remove('is-open');
    overlay.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  // Abrir/cerrar
  const toggleMenu = () => {
    navBar.classList.contains('is-open') ? closeMenu() : openMenu();
  };

  // 1. Clic en botón de barras
  navToggle.addEventListener('click', toggleMenu);

  // 2. Clic en botón X (solo si existe)
  if (navClose) {
    navClose.addEventListener('click', closeMenu);
  }

  // 3. Clic en overlay
  overlay.addEventListener('click', closeMenu);

  // 4. Cerrar al hacer clic en cualquier link
  links.forEach(link => link.addEventListener('click', closeMenu));

  // 5. Cerrar con tecla ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navBar.classList.contains('is-open')) closeMenu();
  });

  // 6. Cerrar si el usuario rota el dispositivo o agranda la pantalla
  window.addEventListener('resize', () => {
    if (!isMobile()) closeMenu();
  });

  // 7. Cerrar si hace clic fuera del menú
  document.addEventListener('click', e => {
    if (!isMobile()) return;
    if (
      navBar.classList.contains('is-open') &&
      !navBar.contains(e.target) &&
      !navToggle.contains(e.target) &&
      !(navClose && navClose.contains(e.target)) // ✅ evita doble disparo en el X
    ) {
      closeMenu();
    }
  });
});

/* ===========================================
   Script funcional para botones de preguntas
   =========================================== */
// Este script sirve para mantener abierta una a la vez cada caja de preguntas. Al hacer clic en otra pregunta, se cierra automaticamnete la anterior
document.addEventListener("DOMContentLoaded", () => {
  const preguntas = document.querySelectorAll(".questions-container");

  preguntas.forEach((detalle) => {
    detalle.addEventListener("toggle", () => {
      if (detalle.open) {
        preguntas.forEach((otro) => {
          if (otro !== detalle) otro.open = false;
        });
      }
    });
  });
});
