/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 */

function flujoEventos(e) {
  console.log(`Hola te saluda ${this}, el click lo originó ${e.target.className}`);
}

document.addEventListener("click", (e) => {
  console.log("Click en", e.target); // For example. Output: Click en: <body>...</body>

  if(e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola soy tu amigo y docente digital... Jonathan MirCha.");
    e.preventDefault();
  }
});

console.log(window.document); // Output: #document