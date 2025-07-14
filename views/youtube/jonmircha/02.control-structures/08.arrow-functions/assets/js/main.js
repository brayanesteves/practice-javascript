const saludoUnaSolaLinea = () => console.log("Hola");
saludoUnaSolaLinea();

const saludoUnaSolaLineaConArgumentos = (nombre) => console.log(`Hola ${nombre}`);
saludoUnaSolaLineaConArgumentos("Irma");

const saludoUnaSolaLineaConArgumentosSinParentesis = nombre => console.log(`Hola ${nombre}`);
saludoUnaSolaLineaConArgumentosSinParentesis("Irma");

const sumar = (a, b) => a + b;
console.log(sumar(8, 9));

const funcionDeVariasLineas = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}
funcionDeVariasLineas();

const numeros = [1, 2, 3, 4, 5];
numeros.forEach((el, index) => console.log(`${el} está en la posición ${index}.`));

const perro = {
    nombre:"kenai",
    ladrar:() => {
        console.log(this);
    },
};
perro.ladrar();