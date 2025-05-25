let nombre = "Jon";
let apellido = 'MirCha';
let saludo = new String("Hola Mundo");
let lorem = "     Lorem ipsum, dolor sit amet consectetur adipising elit. Est, et dolorum. Adipisci sequi, voluptates accusamus earum magnam non pariatur odit consequuntur dicta modi. Quam soluta aliquid nam ea quod dolore.     ";

console.log(nombre, apellido, saludo);

console.log(nombre.length, apellido.length, saludo.length);

console.log(nombre.toUpperCase(), apellido.toLocaleLowerCase());

console.log(lorem.includes("amet"));
console.log(lorem.includes("jon"));
console.log(lorem);
console.log(lorem.trim());
console.log(lorem.split(" "));
console.log(lorem.split(","));