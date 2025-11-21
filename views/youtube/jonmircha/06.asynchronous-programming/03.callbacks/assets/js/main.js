/**
 * [ENGLISH] 
 * ==========
 * [SPANISH]
 */

function cuadradoCallback100(value, callback) {
    setTimeout(() => {
        callback(value, value * value);
    }, 0 | Math.random() * 100);
}
cuadradoCallback100(0, (value, result) => {
    console.log("Inicio Callback.");
    console.log(`Callback: ${value}, ${result}`);    
});

console.log();

function cuadradoCallback1000(value, callback) {
    setTimeout(() => {
        callback(value, value * value);
    }, 0 | Math.random() * 1000);
}
cuadradoCallback1000(0, (value, result) => {
    console.log("Inicio Callback.");
    console.log(`Callback: ${value}, ${result}`);    
});

console.log();

/**
 * [ENGLISH]
 * =========
 * [SPANISH]
 * La función cuadradoCallbackHell recibe un valor y una función callback. Después de un tiempo aleatorio (hasta 1 segundo),
 * ejecuta la función callback pasando el valor original y su cuadrado. El código demuestra el concepto de "Callback Hell" al anidar múltiples llamadas a cuadradoCallbackHell,
 * lo que resulta en una estructura de código difícil de leer y mantener. Cada llamada a cuadradoCallbackHell espera a que la anterior complete su ejecución antes de proceder a la siguiente,
 * creando así una cadena de callbacks anidados. Esto ilustra los desafíos asociados con el manejo de múltiples operaciones asíncronas utilizando callbacks, lo que puede llevar a un código desordenado y complicado.
 * @param {*} value
 * @param {*} callback 
 */
function cuadradoCallbackHell(value, callback) {
    setTimeout(() => {
        callback(value, value * value);
    }, 0 | Math.random() * 1000);
}
cuadradoCallbackHell(0, (value, result) => {
    console.log("Inicio Callback.");
    console.log(`Callback: ${value}, ${result}`);

    cuadradoCallbackHell(1, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallbackHell(2, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallbackHell(4, (value, result) => {
                console.log(`Callback: ${value}, ${result}`);
                cuadradoCallbackHell(5, (value, result) => {
                    console.log("Fin Callback.");
                    console.log("Callback Hell !!!!!");
                    console.log("http://callbackhell.com/");
                });
            });
        });
    });
});