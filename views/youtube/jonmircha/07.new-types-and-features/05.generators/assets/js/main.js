/**
 * [ENGLISH]
 * Generators are a special function that allows us to create iterables. A generator is defined with an asterisk (*) after the function keyword.
 * The main feature of generators is that they can pause their execution and then resume it, allowing them to produce a sequence of values over time.
 * This is achieved using the yield keyword to return a value and pause the generator's execution.
 * When a generator is called, it is not executed immediately. Instead, it returns an iterator object that can be used to control the execution of the generator.
 * Each time next() is called on the iterator, the generator is resumed from where it was paused and continues until it finds the next yield expression or until it finishes.
 * ====================
 * [SPANISH]
 * Generadores (Generators) es una función especial que nos permite crear iterables. Un generador se define con un asterisco (*) después de la palabra clave function.
 * La principal característica de los generadores es que pueden pausar su ejecución y luego reanudarla, lo que permite producir una secuencia de valores a lo largo del tiempo.
 * Esto se logra utilizando la palabra clave yield para devolver un valor y pausar la ejecución del generador.
 * Cuando se llama a un generador, no se ejecuta inmediatamente. En su lugar, devuelve un objeto iterador que puede ser utilizado para controlar la ejecución del generador.
 * Cada vez que se llama al método next() del iterador, el generador se reanuda desde donde se pausó y continúa hasta encontrar la siguiente expresión yield o hasta que finalice.
 */

function* iterable () {
    yield "hola";
    console.log("Hola consola.");
    yield "hola 2";
    console.log("Seguimos con más instrucciones de nuestro código.");
    yield "hola 3";
    yield "hola 4";
}

let iterador = iterable();

// <MANUAL> //
console.log("<MANUAL>");
console.log(iterador.next()); // Output: { value: 'hola', done: false }
console.log(iterador.next()); // Output: Hola consola. { value: 'hola 2', done: false }
console.log(iterador.next()); // Output: Seguimos con más instrucciones de nuestro código. { value: 'hola 3', done: false }
console.log(iterador.next()); // Output: { value: 'hola 4', done: false }
console.log(iterador.next()); // Output: { value: undefined, done: true }
console.log("<.MANUAL>");
// <.MANUAL> //

console.log();

// <CICLO> //
console.log("<CICLO>");
for(let y of iterador) {
    console.log(y); // Output: hola hola 2 Seguimos con más instrucciones de nuestro código hola 4
}

const arr = [...iterable()];
console.log(arr); // Output: [ 'hola', 'hola 2', 'hola 3', 'hola 4' ]

console.log();

function* cuadrado(valor) {
    setTimeout(() => {
        return console.log({ valor, resultado: valor * valor });
    }, Math.random() * 1000);
}

function* generador() {
    console.log("Inicia Generator.");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("Termina Generator.");
}

let gen = generador();

for (let y of gen) {
    console.log(y); // Output: {valor: 2, resultado: 4} {valor: 3, resultado: 9} {valor: 4, resultado: 16} {valor: 0, resultado: 0} {valor: 5, resultado: 25} {valor: 1, resultado: 1}
}
console.log("<.CICLO>");
// <.CICLO> //