/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 */

const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
}

console.log($divsEventos); // Output: NodeList(3) [div.uno, div.dos, div.tres]

$divsEventos.forEach(div => {
  /**
   * [ENGLISH]
   * ====================
   * [SPANISH]
   * Fase de burbuja.
   */
  // div.addEventListener("click", flujoEventos, false);
  // div.addEventListener("click", flujoEventos, false);
    /**
   * [ENGLISH]
   * ====================
   * [SPANISH]
   * Fase de captura.
   */
  // div.addEventListener("click", flujoEventos, true);
  // div.addEventListener("click", flujoEventos, {
  //   capture:false,
  // });
  // div.addEventListener("click", flujoEventos, {
  //   capture:true,
  // });
  // div.addEventListener("click", flujoEventos, {
  //   capture:false,
  //      once:true,
  // });
  div.addEventListener("click", flujoEventos, {
    capture:false,
       once:false,
  });
});