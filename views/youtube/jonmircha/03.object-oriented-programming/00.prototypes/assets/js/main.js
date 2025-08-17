// POO
/**
 * [ENGLISH]
 * ==========
 * [SPANISH]
 * 1) Clases - Modelo a seguir.
 * 2) Objeto - Es una instancia de una clase (Es una copia de ese modelo).
 * 3) Atributos -  Es una carecterística o propiedad del objeto (Son variables dentro de un objeto).
 * 4) Métodos - Son las acciones qye un objeto puede realizar (Son funciones dentro de un objeto).
 */
console.log("Variables objetos.");
const variableAnimal_0 = {
    nombre:"Snoopy",
    sonar() {
        console.log("Hago sonidos por que estoy vivo.");
    },
};

const variableAnimal_1 = {
    nombre:"Lola Bunny",
    sonar() {
        console.log("Hago sonidos por que estoy vivo.");
    },
};

console.log(variableAnimal_0); // Output: {nombre: "Snoopy", sonar: f}
console.log(variableAnimal_1); // Output: {nombre: "Lola Bunny", sonar: f}

console.log();

console.log("Funciones.");
/**
 * [ENGLISH]
 * [SPANISH]
 * Función constructora
 */
function AnimalFunctionNotProtypes(nombre, genero) {
    /**
     * [ENGLISH]
     * 
     * [SPANISH]
     * Atributos.
     */
    this.nombre = nombre;
    this.genero = genero;

    /**
     * [ENGLISH]
     * 
     * [SPANISH]
     * Métodos
     */
    this.sonar = function() {
        console.log("Hago sonidos por que estoy vivo.");
    };
    this.saludar = function() {
        console.log(`Hola me llamo ${this.nombre}.`);
    }
}

/**
 * [ENGLISH]
 * [SPANISH]
 * Función constructora donde asignamos los métodos al 'Prototipo', no la función como tal.
 */
function AnimalFunctionToProtypes(nombre, genero) {
    /**
     * [ENGLISH]
     * 
     * [SPANISH]
     * Atributos.
     */
    this.nombre = nombre;
    this.genero = genero;

}
/**
 * [ENGLISH]
 * 
 * [SPANISH]
 * Métodos agregados al prototipo de la función constructora.
 */
AnimalFunctionToProtypes.prototype.sonar = function() {
    console.log("Hago sonidos por que estoy vivo.");
};
AnimalFunctionToProtypes.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre}.`);
}

const snoppy = new AnimalFunctionNotProtypes("Snoopy", "Macho"); // Output: {nombre: "Snoopy", genero: "Macho", sonar: f}
const lolaBunny = new AnimalFunctionNotProtypes("Lola Bunny", "Hembra"); // Output: {nombre: "Lola Bunny", genero: "Hembra", sonar: f}

console.log(snoppy);
console.log(lolaBunny);

snoppy.sonar();
snoppy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();