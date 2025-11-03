class Animal {

    /**
     * [ENGLISH]
     * @param {*} nombre 
     * @param {*} genero
     * 
     * [SPANISH]
     * El constructor es un método especial que se ejecuta en el momento de instanciar la clase.
     * @param {*} nombre
     * @param {*} genero
     */
    constructor(nombre, genero) {
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
     * Métodos
     */
    sonar() {
        console.log("Hago sonidos por que estoy vivo.");
    };
    saludar() {
        console.log(`Hola me llamo ${this.nombre}.`);
    }
}

class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        /**
         * [ENGLISH]
         * [SPANISH]
         * Con el método 'super()' se manda a llamar el 'constructor' de la clase padre.
         */
        super(nombre, genero);
        this.tamanio = tamanio;
    }

    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido.");
    }
    ladrar() {
        console.log("Guauuu Guauuu!!!");
    };
}

let mimi   = new Animal("Mimi", "Hembra");
let scooby = new Animal("Scooby", "Macho");

console.log(mimi);   // Output: Animal {nombre: "Mimi", genero: "Hembra"}
mimi.saludar();
mimi.sonar();
console.log(scooby); // Output: Animal {nombre: "Scooby", genero: "Macho"}
scooby.saludar();
scooby.sonar();

scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(scooby); // Output: Perro {nombre: "Scooby", genero: "Macho", tamanio: "Gigante"}
scooby.saludar();
scooby.sonar();
scooby.ladrar();