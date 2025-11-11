/**
 * [ENGLISH]
 * 
 * [SPANISH]
 * 1) Programa una función que obtenga un numero aleatorio entre 501 y 600.
 * 2) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), por ejemplo. miFuncion(2002) devolverá 'true'.
 * 3) Programa una función que calcule el factorial de un número (El factorial de un entero positivo 'n', se define como el producto de todos los números enteros positivos desde 1 hasta 'n'), por ejemplo. miFuncion(5) devolverá 120.
 */

// <EXERCISE 1> //
console.log("<EXERCISE 1>");
console.log("<SOLUTION N°0>");
const aleatorio = () => console.info(Math.round(Math.random() * 100) + 500);
aleatorio(); // Output: 562
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 1>");
// <.EXERCISE 1> //

console.log();

// <EXERCISE 2> //
console.log("<EXERCISE 2>");
console.log("<SOLUTION N°0>");
const capicua = (numero = 0) => {
    if(!numero) return console.warn("No ingresaste un número.");
    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número.`);
    
    numero = numero.toString();
    
    let alReves = numero.split("").reverse().join("");

    return (numero === alReves) ? console.info(`Sí es capicúa. Número original: ${numero}, Número al revés: ${alReves}`) : console.info(`No es capicúa, Número original: ${numero}, Número al revés: ${alReves}`);
};
capicua(); // Output: No ingresaste un número.
capicua("19"); // Output: El valor "19" ingresado, NO es un número.
capicua({}); // Output: El valor "[object Object]" ingresado, NO es un número.
capicua(2000); // Output: No es capicúa, Número original: 2000, Número al revés: 0002
capicua(2002); // Output: Sí es capicúa. Número original: 2002, Número al revés: 2002
capicua(18.99); // Output: No es capicúa, Número original: 18.99, Número al revés: 99.81
capicua(212.212); // Output: Sí es capicúa. Número original: 212.212, Número al revés: 212.212
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 2>");
// <.EXERCISE 2> //

console.log();

// <EXERCISE 3> //
console.log("<EXERCISE 3>");
console.log("<SOLUTION N°0>");
const factorial = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número.");
    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número.`);
    if(numero === 0) return console.info("El número no puede ser 0.");
    if(Math.sign(numero) === -1) return console.error("El número no puede ser negativo.");
    if(numero < 0) return console.error("El número no puede ser negativo.");
    if(!Number.isInteger(numero)) return console.error("El número debe ser entero.");

    let factorial = 1;

    for(let i = numero; i > 1; i--) {
        factorial *= i;
    }
    return console.info(`El factorial de ${numero} es ${factorial}.`);
};
factorial(); // Output: No ingresaste un número.
factorial("5"); // Output: El valor "5" ingresado, NO es un número.
factorial([1, 2, 3]); // Output: El valor "1,2,3" ingresado, NO es un número.
factorial({}); // Output: El valor "[object Object]" ingresado, NO es un número.
factorial(0); // Output: El número no puede ser 0.
factorial(-5); // Output: El número no puede ser negativo.
factorial(5); // Output: El factorial de 5 es 120.
factorial(8); // Output: El factorial de 8 es 40320.
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 3>");
// <.EXERCISE 3> //