/**
 * [ENGLISH]
 * call, apply and bind in JavaScript. They allow you to set the value of 'this' in a function.
 * Meaning of each one:
 * 1) call: Invokes a function with a specific context and arguments passed individually.
 *    Example: functionName.call(context, arg1, arg2, ...);
 *    What happens? The function is executed immediately with 'this' pointing to the 'context'.
 * 2) apply: Invokes a function with a specific context and arguments passed as an array.
 *    Example: functionName.apply(context, [arg1, arg2, ...]);
 *    What happens? The function is executed immediately with 'this' pointing to the 'context'.
 * 3) bind: Creates a new function with a specific context, but does not invoke it immediately.
 *    Example: const newFunction = functionName.bind(context, arg1, arg2, ...);
 *    What happens? A new function is created that, when invoked, will have 'this' pointing to the 'context'.
 * ====================
 * [SPANISH]
 * call, apply y bind en JavaScript. Permiten establecer el valor de 'this' en una función.
 * Significado de cada uno:
 * 1) call (llamar): Invoca una función con un contexto específico y argumentos pasados individualmente.
 *    Ejemplo: functionName.call(context, arg1, arg2, ...);
 *    ¿Que ocurre? La función se ejecuta inmediatamente con 'this' apuntando al 'context'.
 * 2) apply (aplicar): Invoca una función con un contexto específico y argumentos pasados como un array.
 *     Ejemplo: functionName.apply(context, [arg1, arg2, ...]);
 *     ¿Que ocurre? La función se ejecuta inmediatamente con 'this' apuntando al 'context'.
 * 3) bind (enlace): Crea una nueva función con un contexto específico, pero no la invoca inmediatamente.
 *    Ejemplo: const newFunction = functionName.bind(context, arg1, arg2, ...);
 *    ¿Que ocurre? Se crea una nueva función que, cuando se invoca, tendrá 'this' apuntando al 'context'.
 */

console.log(this); // Output: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, ...}
this.lugar = "Contexto Global.";

function saludar() {
    console.log(`${this.lugar}`);
}
saludar(); // Output: Contexto Global.

function saludarConParametros(saludo, aQuien) {
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}
saludarConParametros("Hola", "kEnAi"); // Output: Hola kEnAi desde el Contexto Global.

const obj = {
    lugar: "Contexto Objeto.",
};
saludar.call(obj);   // Output: Contexto Objeto.
saludar.apply(obj);  // Output: Contexto Objeto.

console.log();

saludarConParametros.call(obj, "Hola", "Jon");         // Output: Hola Jon desde el Contexto Objeto.
saludarConParametros.call(null, "Hola", "Jon");        // Output: Hola Jon desde el Contexto Global.
saludarConParametros.call(this, "Hola", "Jon");        // Output: Hola Jon desde el Contexto Global.
saludarConParametros.apply(obj, ["Adios", "MirCha"]);  // Output: Hola MirCha desde el Contexto Objeto.
saludarConParametros.apply(null, ["Adios", "MirCha"]); // Output: Hola MirCha desde el Contexto Global.
saludarConParametros.apply(this, ["Adios", "MirCha"]); // Output: Hola MirCha desde el Contexto Global.

console.log();

this.nombre = "Window";
const persona = {
    nombre:"Jon",
    saludar: function() {
        console.log(`Hola ${this.nombre}.`);
    },
};
persona.saludar(); // Output: Hola Jon.

const otraPersona = {
    saludar: persona.saludar.bind(persona),
    saludarConVariables: persona.saludar.bind(this),
};
otraPersona.saludar(); // Output: Hola Jon.