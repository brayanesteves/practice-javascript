/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 */

// <WEAKSET> //
console.log("<WEAKSET>");
const ws = new WeakSet();
let valor1 = {"valor1":1};
let valor2 = {"valor2":2};
let valor3 = {"valor3":3};

ws.add(valor1);
ws.add(valor2);
ws.add(valor3);
console.log(ws); // Output: WeakSet {valor1, valor2, valor3}

console.log(ws.has(valor1));
console.log(ws.has(valor2));
console.log(ws.has(valor3));

ws.delete(valor2);
console.log(ws); // Output: WeakSet {valor1, valor3}

ws.add(valor1);
ws.add(valor2);
ws.add(valor3);
console.log(ws); // Output: WeakSet {valor1, valor3, valor2}

setInterval(() => console.log(ws), 1000);

// <Eliminamos las referencias> //
setTimeout(() => {
    valor1 = null;
    valor2 = null;
    valor3 = null;
}, 5000);
// <.Eliminamos las referencias> //

console.log("<.WEAKSET>");

// <.WEAKSET> //

console.log();

// <WEAKMAPS> //
console.log("<WEAKMAPS>");

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm); // Output: WeakMap {llave1 => 1, llave2 => 2}

console.log(wm.has(llave1)); // Output: tue
console.log(wm.has(llave3)); // Output: false

console.log(wm.get(llave1)); // Output: 1
console.log(wm.get(llave2)); // Output: 2
console.log(wm.get(llave3)); // Output: undefined

wm.delete(llave2);
console.log(wm); // Output: WeakMap {llave1 => 1}

wm.set(llave2, 2);
wm.set(llave3, 3);
console.log(wm); // Output: WeakMap {llave1 => 1, llave2 => 2, llave3 => 3}

setInterval(() => console.log(wm), 1000);

setTimeout(() => {
    llave1 = null;
    llave2 = null;
    llave3 = null;
}, 5000);

console.log("<.WEAKMAPS>");
// <.WEAKMAPS> //