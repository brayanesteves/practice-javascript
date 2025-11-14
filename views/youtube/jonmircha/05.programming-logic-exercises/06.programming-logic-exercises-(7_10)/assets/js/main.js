/**
 * [ENGLISH]
 * 
 * ==========
 * [SPANISH]
 * 1) Programa una función que dado un 'array' numérico devuelve otro array con los números elevados al cuadrado, por ejemplo. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
 * 2) Programa una función que dado un 'array' devuelva el número mas alto y el más bajo de dicho array, por ejemplo. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
 * 3) Programa una función que dado un 'array' de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, por ejemplo. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
 */

// <EXERCISE 1> //
console.log("<EXERCISE 1>");
console.log("<SOLUTION N°0>");
const devolverCuadrados = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de un número.");
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo.");
    if (arr.length === 0) return console.error("El arreglo está vacío.");

    for(let num of arr) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número.`);
    }

    const newArr = arr.map(el => el * el);

    return console.info(`Arreglo original: ${arr},\nArreglo elevado al cuadrado: ${newArr}`);
};

devolverCuadrados();     // Output: No ingresaste un arreglo de un número.
devolverCuadrados(true); // Output: El valor que ingresaste no es un arreglo.
devolverCuadrados({});   // Output: El valor que ingresaste no es un arreglo.
devolverCuadrados([]);   // Output: El arreglo está vacío.
devolverCuadrados([1, "3", 4, {}]); // Output: El valor "3" ingresado, NO es un número.
devolverCuadrados([1, 4, {}]); // Output: El valor "[Object object]" ingresado, NO es un número.
devolverCuadrados([1, 4, 8]); // Output: Arreglo original: 1,4,8, Arreglo elevado al cuadrado: 1,16,64
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 1>");
// <.EXERCISE 1> //

console.log();

// <EXERCISE 2> //
console.log("<EXERCISE 2>");
console.log("<SOLUTION N°0>");
const arrayMinMax = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de un número.");
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo.");
    if (arr.length === 0) return console.error("El arreglo está vacío.");

    for(let num of arr) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número.`);
    }

    return console.info(`Arreglo original: ${arr}\nValor mayor: ${Math.max(...arr)},\nValor menor: ${Math.min(...arr)}`);
};

arrayMinMax();      // Output: No ingresaste un arreglo de un número.
arrayMinMax(false); // Output: El valor que ingresaste no es un arreglo.
arrayMinMax([]);    // Output: El arreglo está vacío.
devolverCuadrados([2, 3, true]);       // Output: El valor "true" ingresado, NO es un número.
devolverCuadrados([1, 4, 5, 99, -60]); // Output: Arreglo original: 1,4,5,99,-60\nValor mayor: 99,\nValor menor: -60
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 2>");
// <.EXERCISE 2> //

console.log();

// <EXERCISE 3> //
console.log("<EXERCISE 3>");
console.log("<SOLUTION N°0>");
const separarParesImpares = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de un número.");
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo.");
    if (arr.length === 0) return console.error("El arreglo está vacío.");

    for(let num of arr) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número.`);
    }

    return console.info({
          pares: arr.filter(num => num % 2 === 0),
        impares: arr.filter(num => num % 2 === 1),
    });
};

separarParesImpares();       // Output: No ingresaste un arreglo de un número.
separarParesImpares("hola"); // Output: El valor que ingresaste no es un arreglo.
separarParesImpares([]);     // Output: El arreglo está vacío.
separarParesImpares([2, 4, "j"]); // Output: El valor "j" ingresado, NO es un número.
separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // Output: {pares: Array(5), impares(5)}
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 3>");
// <.EXERCISE 3> //