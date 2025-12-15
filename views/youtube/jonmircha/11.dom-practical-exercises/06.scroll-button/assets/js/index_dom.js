import   hamburgerMenu         from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import { countdown }           from "./dom/cuenta_regresiva.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/sounds/mp3/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    // countdown("countdown", "May 23, 2021 03:23:19", "Feliz Cumpleaños amigo y docente digital 🤓");
    countdown("countdown", "May 23, 2020 16:17:19", "Feliz Cumpleaños amigo y docente digital 🤓");
    scrollTopButton(".scroll-top-btn");
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