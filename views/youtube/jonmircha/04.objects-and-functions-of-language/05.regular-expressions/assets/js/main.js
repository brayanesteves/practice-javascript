/**
 * [ENGLISH]
 * 
 * [SPANISH]
 * Expresiones Regulares:
 * Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de carácteres.
 * 0) https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
 * 1) https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
 */

let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentrium sit eaque recusandae id sapiente similique, laudantrium voluptatum perferendis ea iure ad odio doloremque earum  voluptate.";

// <WITH INSTANCE 'CLASS' -  RegExp> //
let expRegInstanceClass = new RegExp("lorem", "");

console.log(expRegInstanceClass.test(cadena)); // Output: true
console.log(expRegInstanceClass.exec(cadena)); // Output: [ 'lorem', index: 0, input: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentrium sit eaque recusandae id sapiente similique, laudantrium voluptatum perferendis ea iure ad odio doloremque earum  voluptate.', groups: undefined ]

expRegInstanceClass = new RegExp("lorem", "i"); // La "i" indica que no se distinga entre mayúsculas y minúsculas
console.log(expRegInstanceClass.test(cadena));  // Output: true
console.log(expRegInstanceClass.exec(cadena));  // Output: [ 'Lorem', index: 0, input: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentrium sit eaque recusandae id sapiente similique, laudantrium voluptatum perferendis ea iure ad odio doloremque earum  voluptate.', groups: undefined ]

expRegInstanceClass = new RegExp("lorem", "ig"); // La "g" indica que se busque de forma global en toda la cadena
console.log(expRegInstanceClass.test(cadena));   // Output: true
console.log(expRegInstanceClass.exec(cadena));  // Output: [ 'Lorem', index: 0, input: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentrium sit eaque recusandae id sapiente similique, laudantrium voluptatum perferendis ea iure ad odio doloremque earum  voluptate.', groups: undefined ]
// <.WITH INSTANCE 'CLASS' -  RegExp> //

console.log("================");
// ================ //
console.log("================");

// <WITH SLASH> //
let expRegWithSlash = /lorem/ig; // La "i" indica que no se distinga entre mayúsculas y minúsculas, la "g" indica que se busque de forma global en toda la cadena

console.log(expRegWithSlash.test(cadena)); // Output: true
console.log(expRegWithSlash.exec(cadena)); // Output: [ 'Lorem', index: 0, input: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentrium sit eaque recusandae id sapiente similique, laudantrium voluptatum perferendis ea iure ad odio doloremque earum  voluptate.', groups: undefined ]

expRegWithSlash = /\d/ig; // La "i" indica que no se distinga entre mayúsculas y minúsculas, la "g" indica que se busque de forma global en toda la cadena

console.log(expRegWithSlash.test(cadena)); // Output: false
console.log(expRegWithSlash.exec(cadena)); // Output: null

expRegWithSlash = /[0-9]/ig; // La "i" indica que no se distinga entre mayúsculas y minúsculas, la "g" indica que se busque de forma global en toda la cadena

console.log(expRegWithSlash.test(cadena));
console.log(expRegWithSlash.exec(cadena));

expRegWithSlash = /lorem{1}/ig; // La "i" indica que no se distinga entre mayúsculas y minúsculas, la "g" indica que se busque de forma global en toda la cadena

console.log(expRegWithSlash.test(cadena));
console.log(expRegWithSlash.exec(cadena));

expRegWithSlash = /lorem{1,2}/ig; // La "i" indica que no se distinga entre mayúsculas y minúsculas, la "g" indica que se busque de forma global en toda la cadena

console.log(expRegWithSlash.test(cadena));
console.log(expRegWithSlash.exec(cadena));

expRegWithSlash = /lorem{1,3}/ig; // La "i" indica que no se distinga entre mayúsculas y minúsculas, la "g" indica que se busque de forma global en toda la cadena

console.log(expRegWithSlash.test(cadena));
console.log(expRegWithSlash.exec(cadena));

expRegWithSlash = /lorem{1,}/ig; // La "i" indica que no se distinga entre mayúsculas y minúsculas, la "g" indica que se busque de forma global en toda la cadena

console.log(expRegWithSlash.test(cadena));
console.log(expRegWithSlash.exec(cadena));

expRegWithSlash = /lorem{3,}/ig; // La "i" indica que no se distinga entre mayúsculas y minúsculas, la "g" indica que se busque de forma global en toda la cadena

console.log(expRegWithSlash.test(cadena));
console.log(expRegWithSlash.exec(cadena));

expRegWithSlash = /lorem{2,}/ig; // La "i" indica que no se distinga entre mayúsculas y minúsculas, la "g" indica que se busque de forma global en toda la cadena

console.log(expRegWithSlash.test(cadena));
console.log(expRegWithSlash.exec(cadena));
// <.WITH SLASH> //