let nombre = "kEnAi";
let edad = 7;

// Objeto no literal.
const perro = {
    nombre:nombre,
    edad:edad,
    ladrar:function() {
        console.log("guauu guauu!!");
    }
};

console.log(perro); // Output: {nombre: "kEnAi", edad: 7, ladrar: f}
perro.ladrar(); // Output: guauu guauu!!

// Objeto literal.
const dog = {
    nombre,
    edad,
    raza:"Callejero",
    ladrar() {
        console.log("guauu guauu guauu!!");
    }
};
console.log(dog); // Output: {nombre: "kEnAi", edad: 7, raza: "Callejero", ladrar: f}
dog.ladrar(); // Output: guauu guauu guauu!!