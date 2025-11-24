/**
 * [ENGLISH]
 * Symbol is a primitive data type introduced in ES6 that allows you to create unique and immutable identifiers.
 * They are useful for avoiding name collisions in objects, as each symbol is unique, even if they have the same description.
 * Symbols are not enumerable in for...in loops and do not appear in methods like Object.keys(), making them ideal for private properties.
 * Additionally, symbols can be used as keys in objects, providing a safe way to add properties without the risk of overwriting others.
 * They can be created using the Symbol() function, and each call to this function generates a new unique symbol.
 * Symbols can also have optional descriptions to aid in debugging, but these descriptions do not affect their uniqueness.
 * ====================
 * [SPANISH]
 * Symbol es un tipo de dato primitivo introducido en ES6 que permite crear identificadores únicos e inmutables.
 * Son útiles para evitar colisiones de nombres en objetos, ya que cada símbolo es único, incluso si tienen la misma descripción.
 * Los símbolos no son enumerables en bucles for...in y no aparecen en métodos como Object.keys(), lo que los hace ideales para propiedades privadas.
 * Además, los símbolos pueden ser utilizados como claves en objetos, proporcionando una forma segura de agregar propiedades sin riesgo de sobrescribir otras.
 * Pueden ser creados usando la función Symbol(), y cada llamada a esta función genera un nuevo símbolo único.
 * Los símbolos también pueden tener descripciones opcionales para facilitar la depuración, pero estas descripciones no afectan su unicidad.
 */

let id  = "hola";
let id2 = "hola";

console.log(id === id2); // Output: true

let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1 === sym2);            // Output: false
console.log(sym1, sym2);               // Output: Symbol(sym1) Symbol(sym2)
console.log(typeof sym1, typeof sym2); // Output: symbol symbol

console.log();

const _NOMBRE  = Symbol("nombre");
const _SALUDAR = Symbol("saludar");

const _persona = {
    [_NOMBRE]: "Jon",
    edad: 35,
};

console.log(_persona); // Output: {Symbol(): "Jon"}

_persona._NOMBRE = "Jonathan MirCha";
console.log(_persona);         // Output: {Symbol("nombre"): "Jon", NOMBRE: "Jonathan MirCha"}
console.log(_persona._NOMBRE);  // Output: Jonathan MirCha
console.log(_persona[_NOMBRE]); // Output: Jon

_persona[_SALUDAR] = function() {
    console.log(`Hola ${this[_NOMBRE]}`); // Output: Hola Jonathan MirCha
}

_persona[_SALUDAR](); //  Output: Hola Jonathan MirCha

for(let propiedad in _persona) {
    console.log(propiedad);            // Output: _NOMBRE
    console.log(propiedad[propiedad]); // Output: Jonathan MirCha
}

console.log(Object.getOwnPropertySymbols(_persona));

console.log();

const NOMBRE  = Symbol();
const SALUDAR = Symbol();

const persona = {
    [NOMBRE]: "Jon",
    edad: 35,
};

console.log(persona); // Output: {Symbol(): "Jon"}

persona.NOMBRE = "Jonathan MirCha";
console.log(persona);         // Output: {Symbol(): "Jon", NOMBRE: "Jonathan MirCha"}
console.log(persona.NOMBRE);  // Output: Jonathan MirCha
console.log(persona[NOMBRE]); // Output: Jon

persona[SALUDAR] = function() {
    console.log(`Hola ${this[NOMBRE]}`); // Output: Hola Jonathan MirCha
}

persona[SALUDAR](); //  Output: Hola Jonathan MirCha

for(let propiedad in persona) {
    console.log(propiedad);            // Output: _NOMBRE
    console.log(propiedad[propiedad]); // Output: Jonathan MirCha
}

console.log(Object.getOwnPropertySymbols(persona));