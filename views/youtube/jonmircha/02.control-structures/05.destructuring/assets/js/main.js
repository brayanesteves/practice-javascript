const numeros = [1, 2, 3];

/**
 * [ENGLISH]
 * [SPANISH]
 * Sin destructuración.
 */
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

console.log(uno, dos, tres); // Output: 1 2 3

/**
 * [ENGLISH]
 * [SPANISH]
 * Con destructuración.
 */
const [one, two, three] = numeros;
console.log(one, two, three); // Output: 1 2 3

const persona = {
    nombre:"Jon",
    apellido:"MirCha",
    edad:35,
};

let { nombre, apellido, edad } = persona;
console.log(nombre, apellido, edad); // Output: Jon MirCha 35

let { age } = persona;
console.log(age); // Output: undefined