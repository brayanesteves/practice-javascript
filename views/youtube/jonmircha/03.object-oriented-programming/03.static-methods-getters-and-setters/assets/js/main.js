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
        this.raza    = null;
    }

    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido.");
    }
    ladrar() {
        console.log("Guauuu Guauuu!!!");
    }

    /**
     * [ENGLISH]
     * [SPANISH]
     * Un método estático se pueden ejecutar sin necesidad de instanciar la clase.
     */
    static queEres() {
        console.log("Los perros somos animáles mamíferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre.");
    }

    /**
     * [ENGLISH]
     * [SPANISH]
     * Los 'setters' y 'getters' son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase.
     */
    get getRaza() {
        return this.raza;
    }

    set setRaza(raza) {
        this.raza = raza;
    }

}

Perro.queEres(); // Output: Los perros somos animáles mamíferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre.

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
console.log(scooby.getRaza); // Output: null
scooby.setRaza = "Gran Danés";
console.log(scooby.getRaza); // Output: Gran Danés