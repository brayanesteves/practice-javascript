/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 */

// window.alert("Alerta");
// window.confirm("Confirmación");
// window.prompt("Aviso");

// alert("jon");

const $btnAbrir    = document.getElementById("abrir-ventana");
const $btnCerrar   = document.getElementById("cerrar-ventana");
const $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
  // window.open("https://jonmircha.com");
  // open("https://jonmircha.com");
  ventana = window.open("https://jonmircha.com");
  // ventana = open("https://jonmircha.com");
});

$btnCerrar.addEventListener("click", (e) => {
  // window.close();
  // close();
  ventana.close();
});

$btnImprimir.addEventListener("click", (e) => {
  window.print();
  // print();
});