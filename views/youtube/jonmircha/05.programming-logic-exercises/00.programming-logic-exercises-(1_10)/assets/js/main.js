/**
 * [ENGLISH]
 * 
 * [SPANISH]
 * 1) Programa una función que cuente el número de caracateres de una cadena de texto, por ejemplo. miFuncion("Hola Mundo") devolverá 10
 * 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados por ejemplo: minFuncion("Hola Mundo", 4) devolverá "Hola".
 * 3) Programa una función que dada una 'String' te devuelva un 'Array' de textos separados por cierto carácter, por ejemplo: miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']
 * 4) Programa una función que repita un texto X veces, por ejemplo: miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo
 */

// <EXERCISE 1> //
function countCharacters(text) {
    return text.length;
}
console.log(countCharacters("Hola Mundo")); // Output: 10
// <.EXERCISE 1> //

// <EXERCISE 2> //
function trimText(text, length) {
    return text.slice(0, length);
}
console.log(trimText("Hola Mundo", 4)); // Output: "Hola"
// <.EXERCISE 2> //

// <EXERCISE 3> //
function splitText(text, separator) {
    return text.split(separator);
}
console.log(splitText('hola que tal', ' ')); // Output: ['hola', 'que', 'tal']
// <.EXERCISE 3> //

// <EXERCISE 4> //
function repeatText(text, times) {
    for (let i = 1; i < times; i++) {
        text += ' ' + text;
    }
    return text;
}
console.log(repeatText('Hola Mundo ', 3)); // Output: "Hola Mundo Hola Mundo Hola Mundo"
// <.EXERCISE 4> //