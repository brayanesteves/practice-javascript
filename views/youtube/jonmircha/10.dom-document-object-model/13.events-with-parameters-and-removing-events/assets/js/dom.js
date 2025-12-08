/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 */
function holaMundo(event) {
    alert("Hola Mundo");
    console.log(event); // Output: MouseEvent {isTrusted: true, screenX: -1190, screenY: 705, clientX: 90, clientY: 602, ...}
}

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}.`);
  console.log(event); // Output: MouseEvent {isTrusted: true, screenX: 1154, screenY: 705, clientX: 126, clientY: 602, ...}
}

const $eventoSemantico         = document.getElementById("evento-semantico");
      $eventoSemantico.onclick = holaMundo;
      $eventoSemantico.onclick = function (e) {
        alert("Hola Mundo Manejador de Eventos Semántico.");
        console.log(e);     // Output: MouseEvent {isTrusted: true, screenX: -1190, screenY: 705, clientX: 90, clientY: 602, ...}
        console.log(event); // Output: MouseEvent {isTrusted: true, screenX: -1190, screenY: 705, clientX: 90, clientY: 602, ...}
      };

const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola Mundo Manejador de Eventos Múltiple.");
    console.log(e);        // Output: MouseEvent {isTrusted: true, screenX: 1154, screenY: 705, clientX: 126, clientY: 602, ...}
    console.log(e.type);   // Output: click
    console.log(e.target); // Output: <button id="evento-multiple">Evento con manejador múltiple</button>
    console.log(event);    // Output: MouseEvent {isTrusted: true, screenX: 1154, screenY: 705, clientX: 126, clientY: 602, ...}
});

$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Jon");
});

const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}.`);
  console.log(e);
  $eventoRemover.disabled = true;
};

const $eventoRemover = document.getElementById("evento-remover");
      $eventoRemover.addEventListener("dblclick", (e) => $eventoRemover.removeEventListener("dblclick", removerDobleClick));