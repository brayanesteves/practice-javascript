/**
 * [ENGLISH]
 * 1) Create a function that given a text string counts the number of vowels and consonants, for example. myFunction("Hello World") should return Vowels: 3, Consonants: 7.
 * 2) Create a function that validates that a text is a valid name, for example. myFunction("Jonathan MirCha") should return true.
 * 3) Create a function that validates that a text is a valid email, for example. myFunction("jonmircha@gmail.com") should return true.
 * ==========
 * [SPANISH]
 * 1) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, por ejemplo. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
 * 2) Programa una función que valide que un texto sea un nombre válido, por ejemplo. miFuncion("Jonathan MirCha") devolverá verdadero.
 * 3) Programa una función que valide que un texto sea un email válido, por ejemplo. miFuncion("jonmircha@gmail.com") devolverá verdadero.
 */

// <EXERCISE 1> //
console.log("<EXERCISE 1>");
console.log("<SOLUTION N°0>");
const contarLetras = (cadena = "") => {
    if (!cadena) return console.warn("No ingresaste una cadena de texto.");
    if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto.`);

    let vocales     = 0;
    let consonantes = 0;

    cadena = cadena.toLocaleLowerCase();

    for(let letra of cadena) {
        if(/[aeiouáéíóúäëïöü]/.test(letra)) vocales++;
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
    }

    return console.info({ cadena, vocales, consonantes });
};
contarLetras();             // Output: No ingresaste una cadena de texto.
contarLetras(3);            // Output: El valor "3" ingresado, NO es una cadena de texto.
contarLetras("Hola Mundo"); // Output: {cadena: "hola mundo", vocales: 4, consonantes: 5}
contarLetras("Ñoño");       // Output: {cadena: "ñoño", vocales: 2, consonantes: 2}
contarLetras("Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis, ipsum reiciendis aperiam vero voluptatem quo aliquam, rerum voluptate consequatur est totam, nobis aut expedita officia ea consectetur autem sunt."); // Output: {cadena: "lorem ipsum dolor sit amet consectetur adipisicing elit. enim officiis, ipsum reiciendis aperiam vero voluptatem quo aliquam, rerum voluptate consequatur est totam, nobis aut expedita officia ea consectetur autem sunt.", vocales: 85, consonantes: 99}
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 1>");
// <.EXERCISE 1> //

console.log();

// <EXERCISE 2> //
console.log("<EXERCISE 2>");
console.log("<SOLUTION N°0>");
const validarNombre = (nombre = "") => {
    if (!nombre) return console.warn("No ingresaste un nombre.");
    if (typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresado, NO es una cadena de texto.`);

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

    return (expReg) ? console.info(`"${nombre}", es un nombre valido.`) : console.warn(`"${nombre}", NO es un nombre valido.`);
};
validarNombre();                      // Output: No ingresaste un nombre.
validarNombre(3);                     // Output: El valor "3" ingresado, NO es una cadena de texto.
validarNombre("Jonathan MirCha");     // Output: "Jonathan MirCha", es un nombre valido.
validarNombre("Jonathan MirCha, 35"); // Output: "Jonathan MirCha, 35", NO es un nombre valido.
validarNombre("Jonathan MirCha,");    // Output: "Jonathan MirCha,", NO es un nombre valido.
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 2>");
// <.EXERCISE 2> //

console.log();

// <EXERCISE 3> //
console.log("<EXERCISE 3>");
console.log("<SOLUTION N°0>");
const validarEmail = (email = "") => {
    if (!email) return console.warn("No ingresaste un email.");
    if (typeof email !== "string") return console.error(`El valor "${email}" ingresado, NO es una cadena de texto.`);

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (expReg) ? console.info(`"${email}", es un email valido.`) : console.warn(`"${email}", NO es un email valido.`);
};
validarEmail(); // Output: No ingresaste un email.
validarEmail(34); // Output: El valor "34" ingresado, NO es una cadena de texto.
validarEmail("jon,mir,cha@gmail"); // Output: "jon,mir,cha@gmail", NO es un email valido.
validarEmail("jonmircha@gmail.com"); // Output: "jonmircha@gmail.com", es un email valido.
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 3>");
// <.EXERCISE 3> //

// <MERGER EXERCISE 1 AND 2> //
console.log("<MERGER EXERCISE 1 AND 2>");
console.log("<SOLUTION N°0>");
const validarPatron = (cadena = "", patron = undefined) => {
    if (!cadena) return console.warn("No ingresaste una cadena de texto a evaluar.");
    if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto.`);

    if (patron === undefined) return console.warn("No ingresaste un patrón a evaluar.");
    if (!(patron instanceof RegExp)) return console.error(`El valor "${patron}" ingresado, NO es una expresión regular.`);

    let expReg = patron.test(email);

    return (expReg) ? console.info(`"${patron}", cumple con el patrón ingresado.`) : console.warn(`"${patron}", NO cumple con el patrón ingresado.`);
};
validarPatron();                       // Output: No ingresaste una cadena de texto a evaluar.
validarPatron({});                     // Output: El valor "[object object]" ingresado, NO es una cadena de texto.
validarPatron("Hola Mundo");           // Output: No ingresaste un patrón a evaluar.
validarEmail("Hola Mundo", "hola");    // Output: El valor "hola" ingresado, NO es una expresión regular.
validarEmail("Hola Mundo", [1, 2, 3]); // Output: El valor "hola" ingresado, NO es una expresión regular.
validarPatron("Jonathan MirCha");      // Output: No ingresaste un patrón a evaluar.
validarPatron("Jonathan MirCha", /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g);    // Output: No ingresaste un patrón a evaluar.
validarPatron("Jonathan MirCha 19", /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g); // Output: "Jonathan MirCha 19", NO cumple con el patrón ingresado.
validarEmail("jonmircha@gmail", new RegExp("/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/", "i"));     // Output: "jonmircha@gmail", NO cumple con el patrón ingresado.
validarEmail("jonmircha", new RegExp("/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/", "i"));           // Output: "jonmircha", NO cumple con el patrón ingresado.
validarEmail("jonmircha@gmail.com", new RegExp("/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/", "i")); // Output: "jonmircha@gmail.com", cumple con el patrón ingresado.
console.log("<.SOLUTION N°0>");
console.log("<.MERGER EXERCISE 1 AND 2>");
// <.MERGER EXERCISE 1 AND 2> //