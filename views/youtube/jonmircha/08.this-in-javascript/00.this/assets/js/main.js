/**
 * [ENGLISH]
 * 'this' in JavaScript. It is a reference to the current execution context.
 * ====================
 * [SPANISH]
 * 'this' en JavaScript. Es una referencia al contexto de ejecución actual.
 */

console.log(this);            // Output: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, ...}
console.log(window);          // Output: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, ...}
console.log(this === window); // Output: true

this.nombre = "Contexto Global.";
console.log(this.nombre); // Output: Contexto Global

function imprimir() {
    console.log(this.nombre);
}
imprimir(); // Output: Contexto Global.

const obj = {
    nombre: "Contexto Objeto.",
    imprimir: function() {
        console.log(this.nombre);
    }
};
obj.imprimir(); // Output: Contexto Objeto.

const obj2 = {
    nombre: "Contexto Objeto 2.",
    imprimir
};
obj2.imprimir(); // Output: Contexto Objeto 2.

const obj3 = {
    nombre: "Contexto Objeto 3.",
    imprimir: () => {
        console.log(this.nombre);
    }
};
/**
 * [ENGLISH]
 * Explanation of why the output is "Global Context."
 * Arrow functions do not have their own 'this'. Instead, they inherit 'this' from the context in which they were defined.
 * In this case, 'imprimir' was defined in the global context, so 'this' inside the arrow function points to the global object (window).
 * Therefore, when calling 'obj3.imprimir()', 'this.nombre' refers to 'window.nombre', which is "Global Context.".
 * ====================
 * [JAPANESE]
 * 出力が「グローバルコンテキスト」である理由の説明。
 * アロー関数には独自の 'this' がありません。代わりに、定義されたコンテキストから 'this' を継承します。
 * この場合、 'imprimir' はグローバルコンテキストで定義されたため、アロー関数内の 'this' はグローバルオブジェクト（window）を指します。
 * したがって、 'obj3.imprimir()' を呼び出すと、 'this.nombre' は 'window.nombre' を参照し、これは「グローバルコンテキスト」です。。
 * ====================
 * [GERMAN]
 * Erklärung, warum die Ausgabe "Globaler Kontext" ist.
 * Arrow-Funktionen haben ihren eigenen 'this'. Anstatt, vererben sie 'this' vom Kontext, in dem sie definiert wurden.
 * In diesem Fall wurde 'imprimir' im globalen Kontext definiert, sodass 'this' innerhalb der Arrow-Funktion auf das globale Objekt (window) verweist.
 * Daher bezieht sich 'this.nombre' bei Aufruf von 'obj3.imprimir()' auf 'window.nombre', was "Globaler Kontext" ist.
 * ====================
 * [SPANISH]
 * Expliacion de por qué el output es "Contexto Global."
 * Las funciones flecha no tienen su propio 'this'. En su lugar, heredan el 'this' del contexto en el que fueron definidas.
 * En este caso, 'imprimir' fue definida en el contexto global, por lo que 'this' dentro de la función flecha apunta al objeto global (window).
 * Por lo tanto, al llamar a 'obj3.imprimir()', 'this.nombre' se refiere a 'window.nombre', que es "Contexto Global.".
 * 
 */
obj3.imprimir(); // Output: Contexto Global.

function Persona(nombre) {
    this.nombre = nombre;
    return console.log(this.nombre);
}

let jon = new Persona("Jon"); // Output: Jon

/**
 * [ENGLISH]
 * Explanation of why the output is "Global Context 22."
 * When using a closure (a function returned from another function), the 'this' inside the returned function does not refer to the instance of 'Persona'.
 * Instead, it refers to the global context (window) because the returned function is called in the global scope.
 * @param {*} nombre
 * @returns
 * ====================
 * [SPANISH]
 * Explicación de por qué el output es "Contexto Global 22."
 * Cuando se utiliza un cierre (una función devuelta desde otra función), el 'this' dentro de la función devuelta no se refiere a la instancia de 'Persona'.
 * En su lugar, se refiere al contexto global (window) porque la función devuelta se llama en el ámbito global.
 * @param {*} nombre
 * @returns 
 */
function PersonaClosure(nombre) {
    this.nombre = nombre;
    return function() {
        console.log(this.nombre, 22);
    };
}

jon = new PersonaClosure("Jon"); // Output: Contexto Global 22.
jon(); // Output: Contexto Global.

/**
 * [ENGLISH]
 * Explanation of why the output is "Jon 77"
 * Arrow functions do not have their own 'this'. Instead, they inherit 'this' from the context in which they were defined.
 * In this case, 'imprimir' was defined in the global context, so 'this' inside the arrow function points to the global object (window).
 * Therefore, when calling 'obj3.imprimir()', 'this.nombre' refers to 'window.nombre', which is "Global Context".
 * ====================
 * [SPANISH]
 * Explicación de por qué el output es "Jon 77"
 * Las funciones flecha no tienen su propio 'this'. En su lugar, heredan el 'this' del contexto en el que fueron definidas.
 * En este caso, 'imprimir' fue definida en el contexto global, por lo que 'this' dentro de la función flecha apunta al objeto global (window).
 * Por lo tanto, al llamar a 'obj3.imprimir()', 'this.nombre' se refiere a 'window.nombre', que es "Contexto Global".
 * @param {*} nombre 
 * @returns 
 */
function PersonaClosureFuncionAnonima(nombre) {
    this.nombre = nombre;
    return () => console.log(this.nombre, 22);
}

jon = new PersonaClosureFuncionAnonima("Jon"); // Output: Jon 77
jon(); // Output: Jon 77

function PersonaClosureReferenciaThat(nombre) {
    const that = this;
    that.nombre = nombre;
    return () => console.log(that.nombre, 33);
}

jon = new PersonaClosureReferenciaThat("Jon"); // Output: Jon 33
jon(); // Output: Jon 33