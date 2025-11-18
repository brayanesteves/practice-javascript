/**
 * [ENGLISH] 
 * ==========
 * [SPANISH]
 */
console.log("Inicio.");
setTimeout(() => {
    console.log("Ejecutando un 'setTimeout', esto se ejecuta una sóla vez.");
}, 1000);

console.log();

setTimeout(() => {
    console.log("Ejecutando un 'setTimeout', esto se ejecuta una sóla vez.");
}, 3000);

console.log();

setInterval(() => {
    console.log("Ejecutando un 'setInterval', esto se ejecuta indefinidamente cada cierto intervalo de tiempo.");
}, 1000);

console.log();

setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

console.log();

let temporizadorTimeout = setTimeout(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);
clearTimeout(temporizadorTimeout);
console.log("Despúes del 'clearTimeout'.");

console.log();

let temporizadorInterval = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);
clearInterval(temporizadorInterval);
console.log("Despúes del 'clearInterval'.");