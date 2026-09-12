// Script funcional para menú desplegable

// Definir las variables
const dropDownBoton = document.getElementsByClassName(".navToggle");
const dropdownMenu = document.getElementById("navbar-dropdown");

// Crear la función de despliegue
const toggleDropDown = function () {
    dropdownMenu.classList.toogle("show");
    
}