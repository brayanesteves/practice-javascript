/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 */

const iterable       = [1, 2, 3, 4, 5];
const iterableSet    = new Set([1, 2, 3, 3, 3, 4, 5, 6, 6]);
const iterableString = "Hola Mundo";
const iterableMap    = new Map([["nombre", "jon"], ["edad", 35]]);

/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 * Accedemos al iterador del iterable.
 */
const iterador       = iterable[Symbol.iterator]();
const iteradorSet    = iterableSet[Symbol.iteratorSet]();
const iteradorString = iterableString[Symbol.iteratorString]();
const iteradorMap    = iterableMap[Symbol.iteratorMap]();

console.log(iterable);        // Output: [1, 2, 3, 4, 5]
console.log(iterador);        // Output: Array Iterator {}
/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 * Usamos el método next() para recorrer el iterador. Cada llamada a next() devuelve un objeto con dos propiedades:
 * value: el valor actual del elemento.
 * done: un booleano que indica si se ha llegado al final del iterador.
 */
// <MANUAL> //
console.log("<MANUAL>");
console.log(iterador.next()); // Output: { value: 1, done: false }
console.log(iterador.next()); // Output: { value: 2, done: false }
console.log(iterador.next()); // Output: { value: 3, done: false }
console.log(iterador.next()); // Output: { value: 4, done: false }
console.log(iterador.next()); // Output: { value: 5, done: true }
console.log("<.MANUAL>");
// <.MANUAL> //

// <CICLO> //
console.log("<CICLO>");
let next = iterador.next();

console.log("<NORMAL>");
while (!next.done) {
    console.log(next.value); // Output: 1 2 3 4 5
    next = iterador.next();
}
console.log("<.NORMAL>");

console.log();

console.log("<WITH-SET>");
let nextSet = iteradorSet.next();

while (!nextSet.done) {
    console.log(nextSet.value); // Output: 1 2 3 4 5 6
    nextSet = iteradorSet.next();
}
console.log("<.WITH-SET>");

console.log();

console.log("<WITH-STRING>");
let nextString = iteradorString.next();

while (!nextString.done) {
    console.log(nextString.value); // Output: H o l a   M u n d o
    nextString = iteradorString.next();
}
console.log("<.WITH-STRING>");

console.log();

console.log("<WITH-MAP>");
let nextMap = iteradorMap.next();

while (!nextMap.done) {
    console.log(nextMap.value); // Output: [ 'nombre', 'jon' ] [ 'edad', 35 ]
    nextMap = iteradorMap.next();
}
console.log("<.WITH-MAP>");
console.log("<.CICLO>");
// <.CICLO> //