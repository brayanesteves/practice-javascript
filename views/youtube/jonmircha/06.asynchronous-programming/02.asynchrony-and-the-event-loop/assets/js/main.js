/**
 * [ENGLISH] 
 * ==========
 * [SPANISH]
 * Antes de explicar como funciona el modelo e JavaScript, es importante entender algunos conceptos:
 * 1) Procesamiento Single thread y Multi thread.
 * 2) Operaciones de CPU y Operaciones de I / O.
 * 3) Operaciones Concurrentes y Paralelas.
 * 4) Operaciones Bloqueantes y No Bloqueantes.
 * 5) Operaciones Síncronas y Asíncronas.
 * Javascript usa un modelo asíncrono y no bloqueante, con un 'loop' de eventos implementando en un sólo hilo, (single thread) para operaciones de entrada y salida (input/output).
 */

console.log("<POINT N°4>");

// <Código Síncrono Bloqueante> //
console.log("<SYNCHRONOUS BLOCKING CODE>");
(() => {
    console.log("Código Síncrono.");
    console.log("Inicio.");

    function dos() {
        console.log("Dos.");
    }

    function uno() {
        console.log("Uno.");
        dos();
        console.log("Tres.");
    }

    uno();
    console.log("Fin.");
})();
console.log("<.SYNCHRONOUS BLOCKING CODE>");
// <.Código Síncrono Bloqueante> //

console.log();

// <Código Asíncrono No Bloqueante> //
console.log("<ASYNCHRONOUS NON-BLOCKING CODE>");
(() => {
    console.log("Código Asíncrono.");
    console.log("Inicio.");

    function dos() {
        setTimeout(function () {
            console.log("Dos.");
        }, 1000);
    }

    function uno() {
        setTimeout(function () {
            console.log("Uno.");
        }, 0);
        dos();
        console.log("Tres.");
    }

    uno();
    console.log("Fin.");
})();
console.log("<.ASYNCHRONOUS NON-BLOCKING CODE>");
// <.Código Asíncrono No Bloqueante> //

console.log("<.POINT N°4>");