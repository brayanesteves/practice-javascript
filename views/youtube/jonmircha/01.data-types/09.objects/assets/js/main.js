let a = new String("Hola");
console.log(a); // String {"Hola"}

const b = {};
console.log(b); // {}

const c = new Object(); // Not recommend.
console.log(c); // {}

/**
 * [ENGLISH]
 * 
 * [SPANISH]
 * Dentro de un objeto, a las variables se le van a llamar atributos/propiedades
 * y a las funciones se les llama métodos.
 */
const jon = {
    nombre:"Jon",
    apellido:"MirCha",
    edad:35,
    pasatiempos:["Correr", "Hacer ejercicio", "Dar clases"],
    soltero:false,
    contacto:{
        email:"jonmircha@gmail.com",
        twitter:"@jonmircha",
        movil:"5215512345678",
    },
    saludar:function() {
        console.log(`Hola :)`);
    },
    decirMiNombre:function() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me seguir como ${this.contacto.twitter} en twitter.`);
    }
};

console.log(jon);
console.log(jon["nombre"]); // Jon // Not Recommend.
console.log(jon["apellido"]); // MirCha // Not Recommend.
console.log(jon.nombre); // Jon
console.log(jon.apellido); // MirCha
console.log(jon.edad); // 35
console.log(jon.soltero); // false
console.log(jon.pasatiempos); // (3) ["Correr", "Hacer ejercicio", "Dar clases"]
console.log(jon.pasatiempos[1]); // Hacer ejercicio
console.log(jon.contacto); // { email:"jonmircha@gmail.com", twitter:"@jonmircha", movil:"5215512345678" }
console.log(jon.contacto.twitter); // @jonmircha
jon.saludar(); // Hola :)
jon.decirMiNombre(); // Hola me llamo Jon MirCha y tengo 35 años y me puedes seguir como @jonmircha en twitter.

console.log(Object.keys(jon));
console.log(Object.values(jon));
console.log(jon.hasOwnProperty("nombre")); // true
console.log(jon.hasOwnProperty("nacimiento")); // false