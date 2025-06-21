try {
    console.log("En el Try se agrega el código a evaluar."); // Pasa por aquí.
    console.log("Segundo mensaje en try.");  // Pasa por aquí.
} catch(error) {
    console.log("Catch, captura cualquier error surgido o lanzado en Try.");
} finally {
    console.log("El bloque finally se ejecutará siempre al final de un bloque try-catch."); // Pasa por aquí.
}
console.log();
try {
    console.log("En el Try se agrega el código a evaluar."); // Pasa por aquí.
    noExiste;
    console.log("Segundo mensaje en try.");
} catch(error) {
    console.log("Catch, captura cualquier error surgido o lanzado en Try."); // Pasa por aquí.
} finally {
    console.log("El bloque finally se ejecutará siempre al final de un bloque try-catch."); // Pasa por aquí.
}
console.log();
try {
    console.log("En el Try se agrega el código a evaluar."); // Pasa por aquí.
    noExiste;
    console.log("Segundo mensaje en try.");
} catch(error) {
    console.log("Catch, captura cualquier error surgido o lanzado en Try."); // Pasa por aquí.
    console.log(error); // Pasa por aquí.
} finally {
    console.log("El bloque finally se ejecutará siempre al final de un bloque try-catch."); // Pasa por aquí.
}
console.log();
try {
    console.log("En el Try se agrega el código a evaluar."); // Pasa por aquí.
    console.log("Segundo mensaje en try.");
    noExiste;
} catch(error) {
    console.log("Catch, captura cualquier error surgido o lanzado en Try."); // Pasa por aquí.
    console.log(error); // Pasa por aquí.
} finally {
    console.log("El bloque finally se ejecutará siempre al final de un bloque try-catch."); // Pasa por aquí.
}
console.log();
try {
    let numero = 10; // Pasa por aquí.
    if(isNaN(numero)) {
        throw new Error("El caractér introducido no es un Número.");
    }
    console.log(numero * numero); // Pasa por aquí.
} catch(error) {
   console.log(`Se produjo el siguiente error: ${error}`);
}
console.log();
try {
    let numero = "y"; // Pasa por aquí.
    if(isNaN(numero)) {
        throw new Error("El caractér introducido no es un Número."); // Pasa por aquí.
    }
    console.log(numero * numero);
} catch(error) {
   console.log(`Se produjo el siguiente error: ${error}`); // Pasa por aquí.
}