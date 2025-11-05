/**
 * [ENGLISH]
 * 
 * [SPANISH]
 * Función Anónima Autoejecutable.
 */

alert("HOla");
console.log("====================");
console.log("'Función Anónima Autoejecutable'.");
(function() {
    console.log("Mi primer IIFE.");
})();

(function(d, w, c) {
    console.log("Mi segunda IIFE.");
    console.log(d); // Output: #document
    console.log(w); // Output: Window {parent: window, top: window, length: 0, frames: Window, opener: null, ...}
    c.log("Este es un console.log");
})(document, window, console);

console.log();
console.log("====================");
console.log("Formas de escribir las 'Funciones Anónimas Autoejecutables'.");
console.log("====================");
console.log();

/**
 * [ENGLISH]
 * 
 * [SPANISH]
 * Formas de escribir las 'Funciones Anónimas Autoejecutables'.
 */

/**
 * [ENGLISH]
 * 
 * [SPANISH]
 * Clásica.
 */
(function() {
    console.log("Versión 'Clásica'.");
})();

/**
 * [ENGLISH]
 * 
 * [SPANISH]
 * La Crockford (JavaScript The Good Parts).
 */
((function() {
    console.log("Versión 'Crockford'.");
})());

/**
 * [ENGLISH]
 * 
 * [SPANISH]
 * Unaria.
 */
+function() {
    console.log("Versón 'Unaria'.");
}();

/**
 * [ENGLISH]
 * 
 * [SPANISH]
 * Facebook.
 */
!function() {
    console.log("Versión 'Facebook'.");
}();
console.log("====================");