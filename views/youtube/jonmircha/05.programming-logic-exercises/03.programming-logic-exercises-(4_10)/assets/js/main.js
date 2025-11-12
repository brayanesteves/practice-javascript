/**
 * [ENGLISH]
 * 
 * [SPANISH]
 * 1) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, por ejemplo. miFuncion(7) devolverá true.
 * 2) Programa una función que determine si un número es par o impar, por ejemplo. miFuncion(29) devolverá Impar.
 * 3) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, por ejemplo. miFuncion(0,"C") devolverá 32°F.

 */

// <EXERCISE 1> //
console.log("<EXERCISE 1>");
console.log("<SOLUTION N°0>");
const numeroPrimo = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número.");
    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número.`);
    if(numero === 0) return console.info("El número no puede ser 0.");
    if(numero === 1) return console.info("El número no puede ser 1.");
    if(Math.sign(numero) === -1) return console.error("El número no puede ser negativo.");

    let divisible = false;

    for(let i = 2; i < numero; i++) {
        if((numero % i) === 0) {
            divisible = true;
            break;
        }
    }

    return(divisible) ? console.info(`El número ${numero} NO es primo.`) : console.info(`El número ${numero} SÍ es primo.`);
};
numeroPrimo();      // Output: No ingresaste un número.
numeroPrimo("320"); // Output: El valor "320" ingresado, NO es un número.
numeroPrimo(true);  // Output: El valor "true" ingresado, NO es un número.
numeroPrimo(0);     // Output: El número no puede ser 0.
numeroPrimo(1);     // Output: El número no puede ser 1.
numeroPrimo(-13);   // Output: El número no puede ser negativo.
numeroPrimo(13);    // Output: El número 13 SÍ es primo.
numeroPrimo(200);   // Output: El número 200 NO es primo.
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 1>");
// <.EXERCISE 1> //

console.log();

// <EXERCISE 2> //
console.log("<EXERCISE 2>");
console.log("<SOLUTION N°0>");
const numeroParImpar = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número.");
    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número.`);

    return((numero % 2) === 0) ? console.info(`El número ${numero} es PAR.`) : console.info(`El número ${numero} es IMPAR.`);
};
numeroParImpar();     // Output: No ingresaste un número.
numeroParImpar("23"); // Output: El valor "45" ingresado, NO es un número.
numeroParImpar(-398); // Output: El número -398 es PAR.
numeroParImpar(19);   // Output: El número 19 es IMPAR.
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 2>");
// <.EXERCISE 2> //

console.log();

// <EXERCISE 3> //
console.log("<EXERCISE 3>");
console.log("<SOLUTION N°0>");
const convertirGrados = (grados = undefined, unidad = undefined) => {
    if(grados === undefined) return console.warn("No ingresaste los grados a convertir.");
    if(typeof grados !== "number") return console.error(`El valor "${grados}" ingresado, NO es un número.`);
    if(unidad === undefined) return console.warn("No ingresaste el tipo de grado a convertir.");
    if(typeof unidad !== "string") return console.error(`El valor "${unidad}" ingresado, NO es una cadena de texto.`);
    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn('Valor de unidad no reconocido. Usa "C" para Celsius o "F" para Fahrenheit.');

    console.log("wiiii funcionó, no tendré que volver a grabar este vídeo por cosas que se me ocurren en tiempo real.");

    if(unidad === "C") {
        return console.info(`${grados}°C = ${Math.round((grados * (9/5)) + 32)}°F`);
    } else if(unidad === "F") {
        return console.info(`${grados}°F = ${Math.round((grados - 32) * (5/9))}°C`);
    }
};
convertirGrados();          // Output: No ingresaste los grados a convertir.
convertirGrados("2");       // Output: El valor "2" ingresado, NO es un número.
convertirGrados(2);         // Output: No ingresaste el tipo de grado a convertir.
convertirGrados(2, true);   // Output: El valor "true" ingresado, NO es una cadena de texto.
convertirGrados(2, "Hola"); // Output: Valor de unidad no reconocido. Usa "C" para Celsius o "F" para Fahrenheit.
convertirGrados(2, "E");    // Output: Valor de unidad no reconocido. Usa "C" para Celsius o "F" para Fahrenheit.
convertirGrados(0, "C");    // Output: 0°C = 32°F
convertirGrados(100, "C");  // Output: 100°C = 212°F
convertirGrados(32, "F");   // Output: 32°F = 0°C
convertirGrados(100, "F");  // Output: 100°F = 38°C
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 3>");
// <.EXERCISE 3> //