/* Operadores. */

/* Aritméticos: + - * / % () */

let a = 5 + 5 - 10 * 3;
console.log(a); // -20

a = 5 + (5 - 10) * 3;
console.log(a); // -10

let modulo = 5%2;
console.log(modulo); // 1

/* Relacionales: <, <, >=, <=, ==, ===, !=, !== */
console.log(8 > 9); // false
console.log(9 > 8); // true
console.log(8 >= 9); // false
console.log(9 >= 8); // true
console.log(7 < 7); // false
console.log(7 <= 7); // true

/**
 * [ENGLISH]
 * ========
 * [SPANISH]
 * 1) =   1 igual es asignación de variable.
 * 2) ==  2 iguales es comparación de valores.
 * 3) === 3 iguales es comparación de tipo de dato y valor.
 */
console.log(7 == 7); // true
console.log("7" == 7); // true
console.log(0 == false); // true

console.log(7 === 7); // true
console.log("7" === 7); // false
console.log(0 === false); // false

/* Incremento - Decremento */
let i = 1;
i = i + 2;
console.log(i); // 3

i = 1;
i += 3;
console.log(i); // 4

i = 1;
i -= 3;
console.log(i); // 2

i = 1;
i /= 3;
console.log(i); // 0.33333333333333

i = 1;
i *= 3;
console.log(i); // 3

i = 2;
i *= 3;
console.log(i); // 6

// Operador unario.
i = 2;
i++;
console.log(i); // 3

i = 2;
i++;
i--;
console.log(i); // 2

i = 2;
i++;
++i;
console.log(i); // 3

i = 2;
i++;
++i;
--i;
console.log(i); // 2

i = 2;
console.log(i++); // 2
console.log(++i); // 4
i++;
++i;
--i;
console.log(i); // 4

/**
 * [ENGLISH]
 * ==========
 * [SPANISH]
 * Lógicos:
 * 1) ! = Not (Niega, es decir lo que es verdadero lo vuelve 'false' y viceversa).
 * 2) || = Or (Cuando tengo 2 o más condiciones, con que una se cumpla, es decir, sea verdadera, el 'OR' será verdadero).
 * 3) && = And (Cuando tengo 2 o más condiciones, todas tienen que cumplirs, es decir, ser verdaderas para que 'AND' se valide).
 */
console.log(!true); // false
console.log(!false); // true
console.log((9 === 9) || ("9" === 9)); // true
console.log((9 === "9") || ("9" === 9)); // false
console.log((9 === 9) && ("9" === 9)); // false
console.log((9 === 9) && ("9" === "9")); // true