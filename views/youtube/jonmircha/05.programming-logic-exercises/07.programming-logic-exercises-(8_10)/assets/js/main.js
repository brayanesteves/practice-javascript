/**
 * [ENGLISH]
 * 
 * ==========
 * [SPANISH]
 * 1) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, por ejemplo. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
 * 2) Programa una función que dado un arreglo de elementos, elimine los duplicados, por ejemplo. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
 * 3) Programa una función que dado un arreglo de números obtenga el promedio, por ejemplo. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
 */

// <EXERCISE 1> //
console.log("<EXERCISE 1>");
console.log("<SOLUTION N°0>");
const ordenarArreglo = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de un número.");
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo.");
    if (arr.length === 0) return console.error("El arreglo está vacío.");

    for(let num of arr) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número.`);
    }

    return console.info({
         arr,
         asc: arr.map(el => el).sort(),
        desc: arr.map(el => el).revert(),
    });
};

ordenarArreglo();                // Output: No ingresaste un arreglo de un número.
ordenarArreglo("Hola");          // Output: El valor que ingresaste no es un arreglo.
ordenarArreglo([]);              // Output: El arreglo está vacío.
ordenarArreglo([3, {}]);         // Output: El valor "[object object]" ingresado, NO es un número.
ordenarArreglo([7, 5, 7, 8, 6]); // Output: {arr: Array(5, asc: Array(5), desc: Array(5))}
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 1>");
// <.EXERCISE 1> //

console.log();

// <EXERCISE 2> //
console.log("<EXERCISE 2>");
console.log("<SOLUTION N°0>");
const quitarDuplicados = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de un número.");
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo.");
    if (arr.length === 0) return console.error("El arreglo está vacío.");
    if (arr.length === 1) return console.error("El arreglo debe tener al menos 2 elementos.");

    return console.info({
        original: arr,
        sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index),
        sinDuplicadosSet: [...new Set(arr)],
    });
};

quitarDuplicados();    // Output: No ingresaste un arreglo de un número.
quitarDuplicados({});  // Output: El valor que ingresaste no es un arreglo.
quitarDuplicados([]);  // Output: El arreglo está vacío.
quitarDuplicados([2]); // Output: El arreglo debe tener al menos 2 elementos.
quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]); // Output: {original: Array(8), sinDuplicados: Array(5), sinDuplicadosSet: Array(5)}
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 2>");
// <.EXERCISE 2> //

console.log();

// <EXERCISE 3> //
console.log("<EXERCISE 3>");
console.log("<SOLUTION N°0>");
const promedio = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de un número.");
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo.");
    if (arr.length === 0) return console.error("El arreglo está vacío.");
    if (arr.length === 1) return console.error("El arreglo debe tener al menos 2 elementos.");

    for(let num of arr) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número.`);
    }

    return console.info(arr.reduce((total, num, index, arr) => {
        total += num;
        if (index === arr.length - 1){
            return `El promedio de ${arr.join(" + ")} es ${total/arr.length}`;
        } else {
            return total;
        }
    }));
};

promedio();          // Output: No ingresaste un arreglo de un número.
promedio({});        // Output: El valor que ingresaste no es un arreglo.
promedio([]);        // Output: El arreglo está vacío.
promedio([2, true]); // Output: El valor "true" ingresado, NO es un número.
promedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);  // Output: El promedio de 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 9 es 4.5
console.log("<.SOLUTION N°0>");
console.log("<.EXERCISE 3>");
// <.EXERCISE 3> //