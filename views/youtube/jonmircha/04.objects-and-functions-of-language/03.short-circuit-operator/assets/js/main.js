/**
 * [ENGLISH]
 * 
 * [SPANISH]
 * 0) Cortocircuito 'OR' - Cuando el valor de la izquierda en la expresión siempre pueda validar a 'true', es el valor que cargará por defecto.
 * 1) Cortocircuito 'AND' - Cuando el valor de la izquierda en la expresión siempre pueda validar a 'false', es el valor que se cargará por defecto.
 */

function saludarWithValue(nombre = "Desconocido") {
    console.log(`Hola ${nombre}.`);
}
function saludarWithoutValue(nombre) {
    console.log(`Hola ${nombre}.`);
}

// <Cortocircuito 'OR'> //
function saludarShortCircuitOperatorOR(nombre) {
    nombre = nombre || "Desconocido"; // Cortocircuito 'OR'
    console.log(`Hola ${nombre}.`);
}
console.log();

saludarWithValue("Jon");              // Output: Hola Jon.
saludarWithoutValue();                // Output: Hola undefined.
saludarShortCircuitOperatorOR("Jon"); // Output: Hola Jon.
saludarShortCircuitOperatorOR();      // Output: Hola Desconocido.

console.log("Cadena" || "Valor de la derecha");  // Output: Cadena
console.log(19 || "Valor de la derecha");        // Output: 19
console.log(true || "Valor de la derecha");      // Output: true
console.log([] || "Valor de la derecha");        // Output: []
console.log({} || "Valor de la derecha");        // Output: {}
console.log(false || "Valor de la derecha");     // Output: Valor de la derecha
console.log(null || "Valor de la derecha");      // Output: Valor de la derecha
console.log(undefined || "Valor de la derecha"); // Output: Valor de la derecha
console.log("" || "Valor de la derecha");        // Output: Valor de la derecha
console.log(-2 || "Valor de la derecha");        // Output: -2
console.log(0 || "Valor de la derecha");         // Output: Valor de la derecha
// <.Cortocircuito 'OR'> //

// <Cortocircuito 'AND'> //
console.log(false && "Valor de la derecha");     // Output: false
console.log(null && "Valor de la derecha");      // Output: null
console.log(undefined && "Valor de la derecha"); // Output: undefined
console.log("" && "Valor de la derecha");        // Output:
console.log(-2 && "Valor de la derecha");        // Output: Valor de la derecha
console.log(0 && "Valor de la derecha");         // Output: 0
console.log("Cadena" && "Valor de la derecha");  // Output: Valor de la derecha
console.log(19 && "Valor de la derecha");        // Output: Valor de la derecha
console.log(true && "Valor de la derecha");      // Output: Valor de la derecha
console.log([] && "Valor de la derecha");        // Output: Valor de la derecha
console.log({} && "Valor de la derecha");        // Output: Valor de la derecha
// <.Cortocircuito 'AND'> //