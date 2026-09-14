/*
=================================================
     Menú desplegable (Móvil)
================================================= */

// 1). Definir las variables y evento EventListener
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.navToggle');
    const navbarDropdown = document.getElementById('navbar-dropdown');
    const icono = navToggle?.querySelector('i');

    // Salida forzada si no existen los elemento o links de la página
    if (!navToggle || !navbarDropdown) return;

    // 2) Función para abrir el menú
    const toggleMenu = () => {
        const estaAbierto = navbarDropdown.classList.toggle('active');

        navToggle.setAttribute('aria-expanded' , estaAbierto);

        navToggle.setAttribute(
            'aria-label' ,
            estaAbierto ? 'Cerrarr menú de navegación' : 'Abrir menú de navegación'
        );

        if (icono) {
            icono.classList.toggle('fa-bars' , !estaAbierto);
            icono.classList.toggle('fa-xmark' , estaAbierto);
        }

        document.body.classList.toggle('menu-abierto' , estaAbierto);
    };

    //3) Cerrar el menú
    const cerrarMenu = () => {
        if (!navbarDropdown.classList.contains('active')) return;

        navbarDropdown.classList.remove('active');
        navToggle.setAttribute('aria-expanded , false');
        navToggle.setAttribute('aria-label' , 'Abrir menú de navegación');

        if(icono) {
            icono.classList.add('fa-bars');
            icono.classList.remove('fa-xmark');
        }

        document.body.classList.remove('menu-abierto');
    };

    // Clic en el botón barras (se cierra)
    navToggle.addEventListener('click' , toggleMenu);

    // Clic fuera del menú (se cierra)
    document.addEventListener('click' , (evento) => {
        const clicDentroMenu = navbarDropdown.contains(evento.target);
        const clickEnElBoton = navToggle.contains(evento.target);

        if(!clicDentroMenu && !clickEnElBoton) {
            cerrarMenu();
        }

    });

    // Cerra con tecla escape
    document.addEventListener('keydown' , (evento) => {
        if (evento.key === 'Escape') {
            cerrarMenu();
        navToggle.focus();
        }
    });

    // Se desactiva el menú cuando pasamos a escritorio
    window.addEventListener('resize' , () => {
        if (window.innerWidth >= 768) {
            cerrarMenu();
        }
    });
});

