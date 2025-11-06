export const PI = Math.PI;

export let usuario  = "Jon";
// export default const password = "qwerty"; // Incorrect.
// export default let password = "qwerty"; // Incorrect.

// const password = "qwerty";
// export default password; // Correct.
const hello = () => console.log("Hola");

export default function saludar() {
    console.log("Hola Módulos +ES6");
}

export class Saludar {
    constructor() {
        console.log("Hola Clases +ES6");
    }
}