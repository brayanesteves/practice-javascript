import store from "./store.js";

const d = document;

const $counterValue = d.getElementById("counter-value");
const $incrementBtn = d.getElementById("increment-btn");
const $decrementBtn = d.getElementById("decrement-btn");
const $resetBtn     = d.getElementById("reset-btn");

/**
 * [ENGLISH]
 * Function to update the displayed value of the counter in the DOM.
 * 
 * =========
 * 
 * [SPANISH]
 * Función para actualizar el valor mostrado del contador en el DOM.
 */
function render() {
    const state = store.getState();
    $counterValue.textContent = state.counter;
}

/**
 * [ENGLISH]
 * Subscribe the 'render' function to be executed every time the state changes.
 * 
 * =========
 * 
 * [SPANISH]
 * Suscribammos la función 'render' para que se ejecute cada vez que el estado cambie.
 */
store.subscribe(render);

/**
 * [ENGLISH]
 * Render the initial value of the counter.
 * 
 * =========
 * 
 * [SPANISH]
 * Renderizamos el valor inicial del contador.
 */
// render();
d.addEventListener("DOMContentLoaded", render);

/**
 * [ENGLISH]
 * Dispatch the actions when the buttons are clicked.
 * 
 * =========
 * 
 * [SPANISH]
 * Despachamos las acciones cuando los botones son clickeados.
 */
$incrementBtn.addEventListener("click", () => store.dispatch({ type: "INCREMENT", payload: 1 }));
$decrementBtn.addEventListener("click", () => store.dispatch({ type: "DECREMENT", payload: 1 }));
$resetBtn.addEventListener("click", () => store.dispatch({ type: "RESET" }));