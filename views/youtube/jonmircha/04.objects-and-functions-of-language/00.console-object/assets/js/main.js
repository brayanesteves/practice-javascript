console.log(console); // Output: {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

console.clear(); // Limpia la consola

console.error("Esto es un error."); // Output: Esto es un error.
console.warn("Esto es un aviso."); // Output: Esto es una advertencia.
console.info("Esto es un mensaje informativo."); // Output: Esto es información.
console.debug("Esto es un mensaje de depuración."); // Output: Esto es un mensaje de depuración.
console.log("Un registro de lo que ha pasado en nuestra aplicación."); // Output: Un registro de lo que ha pasado en nuestra aplicación.

let nombre = "Jon";
let apellido = "Mircha";
let edad = 35;

console.log(nombre); // Output: Jon
console.log(apellido); // Output: Mircha
console.log(edad); // Output: 35
console.log(nombre, apellido, edad); // Output: Jon Mircha 35
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`); // Output: Me llamo Jon Mircha y tengo 35 años.

console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad); // Output: Me llamo Jon Mircha y tengo 35 años.

console.log(window); // Output: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
console.log(document); // Output: #document
console.dir(window); // Output: Window
console.dir(document); // Output: #document

console.group("Cursos de @jonmircha en YouTube:");
console.log("Curso de JavaScript.");
console.log("Curso de Node.js.");
console.log("Curso de PWA.");
console.log("Curso de Flexbox.");
console.log("Curso de Diseño y Programación Web.");
console.groupEnd();

console.groupCollapsed("Cursos de @jonmircha en YouTube:");
console.log("Curso de JavaScript.");
console.log("Curso de Node.js.");
console.log("Curso de PWA.");
console.log("Curso de Flexbox.");
console.log("Curso de Diseño y Programación Web.");
console.groupEnd();

console.table(Object.entries(console)).sort();

const numeros = [1, 2, 3, 4, 5];
const vocales = ["a", "e", "i", "o", "u"];

console.table(numeros);
console.table(vocales);

const perro = {
    nombre:"Boni",
    raza:"Boxer",
    color:"Café",
};
console.table(perro);

console.time("Cuánto tiempo tarda mi código");
const arreglo = Array(1000000);
for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
}
console.timeEnd("Cuánto tiempo tarda mi código");
console.log(arreglo);

for (let i = 0; i <= 100; i++) {
    console.count("Código for")
    console.log(i);
}

let x = 1;
let y = 2;
let pruebaXY = "Se espera que X siempre sea menor que Y";
console.assert(x < y, {x, y, pruebaXY}); // No output since the assertion is true

x = 3;
y = 2;
pruebaXY = "Se espera que X siempre sea menor que Y";
console.assert(x < y, {x, y, pruebaXY}); // Output: Assertion failed: {x: 3, y: 2, pruebaXY: "Se espera que X siempre sea menor que Y"}