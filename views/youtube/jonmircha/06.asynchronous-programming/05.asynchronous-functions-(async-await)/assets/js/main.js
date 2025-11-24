/**
 * [ENGLISH] 
 * ==========
 * [SPANISH]
 */

function cuadradoPromise(value, callback) {
    if(typeof value !== "number") {
        return Promise.reject(`El valor "${value}" ingresado no es un número.`);
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                 value, 
                result:value * value
            });
        }, 0 | Math.random() * 1000);        
    });
}

async function functionAsincronaDeclarada() {
    try {
        console.log('Inicio Async Function.');

        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(3);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(4);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(5);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        console.log('Fin Async Function.');
    } catch (error) {
        console.error(error);
    }
}

functionAsincronaDeclarada();

console.log();

async function functionAsincronaDeclaradaConError() {
    try {
        console.log('Inicio Async Function.');

        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise("3");
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(4);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(5);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        console.log('Fin Async Function.');
    } catch (error) {
        console.error(error);
    }
}

functionAsincronaDeclaradaConError();

console.log();

const functionAsincronaExpresada = async () => {
    try {
        console.log('Inicio Async Function.');

        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(3);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(4);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(5);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        
        console.log('Fin Async Function.');
    } catch (error) {
        console.error(error);
    }
}

functionAsincronaExpresada();