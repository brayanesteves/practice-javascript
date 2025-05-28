/**
 * [ENGLISH]
 * 
 * ====================
 * 
 * [SPANISH]
 * Una función es un bloque de código, autocontenido, que se puede definir una vez
 * y ejecutar en cualquier momento.
 * Opcionalmente, una función puede aceptar parámetros y devolver un valor.
 * Las funciones en JavaScript son objetos, un tipo especial de objetos:
 * "Se dice que las funciones son ciudadanos de primera clase, porque pueden asignarse
 * a un valor, y pueden pasarse cómo argumentos y usarse como un valor de retorno."
 */

// Función Declarada.
function estoEsUnaFuncion() {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}
// Invocación de función.
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();

function unaFuncionQueDevuelveValor() {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
    return "La función ha retornado una cadena de texto.";
}
// Invocación de función.
console.log(unaFuncionQueDevuelveValor());
let valorDeFuncion = unaFuncionQueDevuelveValor();
console.log(valorDeFuncion);

function unaFuncionQueDevuelveValorDosReturn() {
    console.log("Uno");
    return 19; // Este 'return' es el que se ejecuta.
    console.log("Dos");
    console.log("Tres");
    return "La función ha retornado una cadena de texto."; // Este 'return' no regresa la información, por el primer 'return'.
}
// Invocación de función.
console.log(unaFuncionQueDevuelveValorDosReturn());
let valorDeFuncionDosReturn = unaFuncionQueDevuelveValorDosReturn();
console.log(valorDeFuncionDosReturn);

function saludar(nombre = "Desconocido", edad = 0) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

saludar("kEnAi", 7);
saludar();

// Funciones declaradas VS Funciones expresadas.
funcionDeclarada();
function funcionDeclarada() {
    console.log("Esto es una función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes que la función sea declarada.");
}
funcionDeclarada();

// Función anónima.
funcionExpresada();
const funcionExpresada = function() {
    console.log("Esto es una función expresada, es decir, una función que se le ha asignado cómo valor a una variable, si invocamos esta función antes de su definición JS nos dirá 'Cannot access 'funcionExpresada' before initialization'.");
};
funcionExpresada();