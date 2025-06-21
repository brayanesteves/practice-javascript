let contador = 0;

console.log("while");
while(contador < 10) {
    console.log(contador); // Output: 0 1 2 3 4 5 6 7 8 9
    contador++;
}

console.log();

console.log("do - while");
do {
    console.log(contador); // Output: 0 1 2 3 4 5 6 7 8 9
    contador++;
} while(contador < 10);

console.log();

console.log("for");
for(let i = 0; i < 10; i++) {
    console.log(i); // Output: 0 1 2 3 4 5 6 7 8 9
}
console.log();
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]); // Output: 10 20 30 40 50 60 70 80 90 100
}
console.log();
numeros = [10, 20, 30, 80, 90, 100];
for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]); // Output: 10 20 80 90 100
}

console.log();

console.log("for - in");
const jon = {
    nombre:"Jon",
    apellido:"MirCha",
    edad:35,
};
for(const propiedad in jon) {
    /**
     * Output:
     * nombre
     * apellido
     * edad
     */
    console.log(propiedad);
}
console.log();
for(const propiedad in jon) {
    /**
     * Output:
     * Key: nombre, Value: Jon.
     * Key: apellido, Value: MirCha.
     * Key: edad, Value: 35.
     */
    console.log(`Key: ${propiedad}, Value: ${jon[propiedad]}.`);
}

console.log("for - of");
numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for(const elemento of numeros) {
    /**
     * Output:
     * 10
     * 20
     * 30
     * 40
     * 50
     * 60
     * 70
     * 80
     * 90
     * 100
     */
    console.log(elemento);
}
console.log();
let cadena = "Hola Mundo";
for(const caracter of cadena) {
    /**
     * Output:
     * H
     * o
     * l
     * a
     * 
     * M
     * u
     * n
     * d
     * o
     */
    console.log(caracter);
}