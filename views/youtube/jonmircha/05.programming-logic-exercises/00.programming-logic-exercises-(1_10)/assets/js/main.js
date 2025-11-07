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
console.log("<EXERCISE 1>");
console.log("<SOLUTION N°0>");
function countCharacters(text) {
    return text.length;
}
console.log(countCharacters("Hola Mundo")); // Output: 10
console.log("<.SOLUTION N°0>");

console.log();

console.log("<SOLUTION N°1>");
function contarCaracteresFunction(cadena = "") {
    if(!cadena) {
        console.warn("No ingresaste ninguna cadena.");
    } else {
        console.info(`La cadena "${cadena}" tiene ${cadena.length} carácteres.`);
    }
}
contarCaracteresFunction(); // Output: No ingresaste ninguna cadena.
contarCaracteresFunction("Hola Mundo"); // Output: 10
console.log("<.SOLUTION N°1>");

console.log();

console.log("<SOLUTION N°2>");
const contarCaracteresVariableConst = (cadena = "") => (!cadena) ? console.warn("No ingresaste ninguna cadena.") : console.info(`La cadena "${cadena}" tiene ${cadena.length} carácteres.`);
contarCaracteresVariableConst(); // Output: No ingresaste ninguna cadena.
contarCaracteresVariableConst("Hola Mundo"); // Output: 10
console.log("<.SOLUTION N°2>");
console.log("<.EXERCISE 1>");
// <.EXERCISE 1> //

// <EXERCISE 2> //
console.log("<EXERCISE 2>");
console.log("<SOLUTION N°0>");
function trimText(text, length) {
    return text.slice(0, length);
}
console.log(trimText("Hola Mundo", 4)); // Output: "Hola"
console.log("<.SOLUTION N°0>");

console.log();

console.log("<SOLUTION N°1>");
const recortarTexto = (cadena = "", longitud = undefined) => (!cadena) ? console.warn("No ingresaste el texto.") : (longitud === undefined) ? console.warn("No ingresaste la longitud para recortar el texto.") : console.info(cadena.slice(0, longitud));
recortarTexto("Hola Mundo", 4);
recortarTexto();
recortarTexto("Hola Hola");
recortarTexto("", 5);
console.log("<.SOLUTION N°1>");
console.log("<.EXERCISE 2>");
// <.EXERCISE 2> //

// <EXERCISE 3> //
console.log("<EXERCISE 3>");
console.log("<SOLUTION N°0>");
function splitText(text, separator) {
    return text.split(separator);
}
console.log(splitText('hola que tal', ' ')); // Output: ['hola', 'que', 'tal']
console.log("<.SOLUTION N°0>");

console.log();

console.log("<SOLUTION N°1>");
const cadenaAArreglo = (cadena = "", separador = undefined) => (!cadena) ? console.warn("No ingresaste una cadena de texto.") : (separador === undefined) ? console.warn("No ingresaste el carácter separador.") : console.info(cadena.split(separador));
cadenaAArreglo("Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique architecto dolore quisquam minima. Velit, facere. lusto expedita saepe possimus. Nobis fugit quasi cumque placeat vero nam aut suscipit? Dolore.", "");
cadenaAArreglo("Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic", ",");
cadenaAArreglo();
cadenaAArreglo("Hola Mundo");
cadenaAArreglo("", "-");
console.log("<.SOLUTION N°1>");
console.log("<.EXERCISE 3>");
// <.EXERCISE 3> //

// <EXERCISE 4> //
console.log("<EXERCISE 4>");
console.log("<SOLUTION N°0>");
function repeatText(text, times) {
    for (let i = 1; i < times; i++) {
        text += ' ' + text;
    }
    return text;
}
console.log(repeatText('Hola Mundo ', 3)); // Output: "Hola Mundo Hola Mundo Hola Mundo"
console.log("<.SOLUTION N°0>");

console.log();

console.log("<.SOLUTION N°1>");
const repetirTexto = (texto = "", veces = undefined) => {
    if(!texto) return console.warn("No ingresaste el texto a repetir.");
    if(veces === undefined) return console.warn("No ingresaste el número de veces a repetir el texto.");
    if(veces === 0) return console.error("El número de veces no puede ser 0.");
    if(veces < 0) return console.error("El número de veces no puede ser negativo.");

    for(let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
}
repetirTexto("Hola Mundo", 3); // Output: Hola Mundo, 1 \n Hola Mundo, 2 \n Hola Mundo, 3
repetirTexto("Hola Mundo", 0); // Output: El número de veces no puede ser 0.
repetirTexto("Hola Mundo", -20); // Output: El número de veces no puede ser negativo.
repetirTexto("Hola Mundo", -20); // Output: El número de veces no puede ser negativo.
repetirTexto("", -20); // Output: No ingresaste el texto a repetir.
repetirTexto("Hola Mundo");
console.log("<.SOLUTION N°1>");
console.log("<.EXERCISE 4>");
// <.EXERCISE 4> //