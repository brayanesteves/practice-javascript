import   hamburgerMenu         from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import { countdown }           from "./dom/cuenta_regresiva.js";
import   scrollTopButton       from "./dom/boton_scroll.js";
import   darkTheme             from "./dom/tema_oscuro.js";
import   responsiveMedia       from "./dom/objeto_responsive.js";
import   responsiveTester      from "./dom/prueba_responsive.js";
import   userDeviceInfo        from "./dom/deteccion_dispositivos.js";
import   networkStatus         from "./dom/deteccion_red.js";
import   webCam                from "./dom/deteccion_webcam.js";
import   getGeolocation        from "./dom/geolocalizacion.js";
import   searchFilters         from "./dom/filtro_busquedas.js";
import   draw                  from "./dom/sorteo.js";
import   slider                from "./dom/carrusel.js";
import   scrollSpy             from "./dom/scroll_espia.js";
import   smartVideo            from "./dom/video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/sounds/mp3/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    // countdown("countdown", "May 23, 2021 03:23:19", "Feliz Cumpleaños amigo y docente digital 🤓");
    countdown("countdown", "May 23, 2020 16:17:19", "Feliz Cumpleaños amigo y docente digital 🤓");
    scrollTopButton(".scroll-top-btn");
    // responsiveMedia("youtube", "(min-width: 1024px)", "Contenido Móvil", "Contenido Escritorio");
    // responsiveMedia("gmaps", "(min-width: 1024px)", "Contenido Móvil", "Contenido Escritorio");
    responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://www.youtube.com/watch?v=2SetvwBV-SU" target="_blank" rel="nooponer">Ver Video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia("gmaps", "(min-width: 1024px)", `<a href="https://goo.gl/maps/ux/uxNNrRC82kPHGPjb8" target="_blank" rel="nooponer">Ver Mapa</a>`, `<iframe src="https://wwww.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3307860565521!2d-99.16869369209537!3d19.41702312622355!2m3!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1591819162197!5m2!1ses-419!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo();
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

d.addEventListener("keyup", (e) => {
    shortcuts(e);
});

d.addEventListener("keypress", (e) => {
    shortcuts(e);
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();