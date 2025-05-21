var hola = "Hola Mundo";
console.log(hola);
console.log(window.hola);
document.querySelector('.var-hola .variable-0').textContent = hola;

let hello = "HEllo World"
console.log(hello);
console.log(window.hello);
document.querySelector('.let-hello .variable-0').textContent = hello;

// Esto es un bloque - comentario de una línea [This is a block - one line comment].
/**
 * This is 
 * a 
 * multi-line 
 * comment
 * [Esto es 
 * un 
 * comentario 
 * de varias líneas]
*/

// Block scope [Ámbito de bloque].
console.log("***************var***************");
var musica = "Rock";
console.log("Variable música antes del Bloque", musica);
{
    var musica = "Pop";
    console.log("Variable música dentro del Bloque", musica);
}
console.log("Variable música despues del Bloque", musica);

console.log("***************let***************");

let musica_1 = "Rock";
console.log("Variable música antes del Bloque", musica_1);
{
    let musica_1 = "Pop";
    console.log("Variable música dentro del Bloque", musica_1);
}
console.log("Variable música despues del Bloque", musica_1);