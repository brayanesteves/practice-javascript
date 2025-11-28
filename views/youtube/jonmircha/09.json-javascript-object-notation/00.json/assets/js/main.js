/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 */

const json = {
      cadena: "Jon",
      numero: 35,
    booleano: true,
     arreglo: ["correr", "programar", "cocinar"],
      objeto: {
        twitter: "@jonmircha",
          email: "jonmircha@gmail.com"
    },
        nulo: null
};
console.log("<OBJECT>");
console.log(json); // Output: {cadena: 'Jon', numero: 35, booleano: true, arreglo: Array(3), objeto: {...}, ...}
console.log("<.OBJECT>");

console.log();

console.log(JSON); // Output: JSON {Symbol(Symbol.toStringTag): "JSON", parse: ƒ, stringify: ƒ}

console.log();

console.log("<JSON.parse>");
console.log("{}");                  // Output: {}
console.log("[1,2,3]");             // Output: [1,2,3]
console.log(JSON.parse("{}"));      // Output: {}
console.log(JSON.parse("[1,2,3]")); // Output: (3) [1, 2, 3]
console.log(JSON.parse("true"));    // Output: true
console.log(JSON.parse("false"));   // Output: false
console.log(JSON.parse("19"));      // Output: 19
// console.log(JSON.parse("Hola Mundo")); // Output: Uncaught SyntaxError: Unexpected token H in JSON at position 0
console.log(JSON.parse("null"));    // Output: null
// console.log(JSON.parse("undefined")); // Output: Uncaught SyntaxError: Unexpected token u in JSON at position 0
console.log("<.JSON.parse>");

console.log();

console.log("<JSON.stringify>");
console.log(JSON.stringify({}));             // Output: {}
console.log(JSON.stringify([1,2,3]));        // Output: [1,2,3]
console.log(JSON.stringify(true));           // Output: true
console.log(JSON.stringify(false));          // Output: false
console.log(JSON.stringify(19));             // Output: 19
console.log(JSON.stringify("Hola Mundo"));   // Output: "Hola Mundo"
console.log(JSON.stringify(null));           // Output: null
console.log(JSON.stringify(undefined));      // Output: undefined
console.log(JSON.stringify({ x: 2, y: 3 })); // Output: {"x":2,"y":3}
console.log(JSON.stringify(json));           // Output: {"cadena":"Jon","numero":35,"booleano":true,"arreglo":["correr","programar","cocinar"],"objeto":{"twitter":"@jonmircha","email":" jonmircha@gmail.com"},"nulo":null}
console.log(JSON.parse('{"cadena":"Jon","numero":35,"booleano":true,"arreglo":["correr","programar","cocinar"],"objeto":{"twitter":"@jonmircha","email":" jonmircha@gmail.com"},"nulo":null}')); // Output: {cadena: 'Jon', numero: 35, booleano: true, arreglo: Array(3), objeto: {...}, ...}
console.log("<.JSON.stringify>");