let verdadero = true;
let falso = false;

console.log(verdadero, falso); // true false
console.log(typeof verdadero, typeof falso); // boolean boolean

let v = Boolean(true);
let f = Boolean(false);
console.log(v, f); // true false

console.log(Boolean(0)); // false
console.log(Boolean(-7)); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true