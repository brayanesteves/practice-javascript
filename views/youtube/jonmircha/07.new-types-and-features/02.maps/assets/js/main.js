/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 */

const mapa = new Map();

mapa.set("nombre", "Jon Mircha");
mapa.set("apellido", "Mircha");
mapa.set("edad", 35);

console.log(mapa);               // Output: Map(3) {"nombre" => "Jon Mircha", "apellido" => "Mircha", "edad" => 35}
console.log(mapa.size);          // Output: 3
console.log(mapa.has("correo")); // Output: false
console.log(mapa.has("nombre")); // Output: true
console.log(mapa.get("nombre")); // Output: Jon

mapa.set("nombre", "Jonathan Mircha");
console.log(mapa.get("nombre")); // Output: Jonathan Mircha

mapa.delete("apellido");

// ==================== //
// <NO ES PRÁCTICO> //
// mapa.set(19, "diecinueve");
// mapa.set(false, "falso");
// mapa.set({}, {});
// console.log(mapa); // Output: Map(5) {"nombre" => "Jonathan Mircha", "edad" => 35, 19 => "diecinueve", false => "falso", {} => {}}
// for(let [key, value] of mapa) {
//     console.log(`Llave: ${key}, Valor: ${value}`); // Output: Llave: nombre, Valor: Jonathan Mircha Llave: edad, Valor: 35 Llave: 19, Valor: diecinueve Llave: false, Valor: falso Llave: [object Object], Valor: [object Object]
// }
// <.NO ES PRÁCTICO> //
// ==================== //

console.log(mapa); // Output: Map(2) {"nombre" => "Jonathan Mircha", "edad" => 35}

for(let [key, value] of mapa) {
    console.log(`Llave: ${key}, Valor: ${value}`); // Output: Llave: nombre, Valor: Jonathan Mircha Llave: edad, Valor: 35
}

console.log();

const mapa2 = new Map([
    ["nombre", "kEnAi"],
    ["edad", 7],
    ["animal", "perro"],
    [null, "nulo"],
]);

console.log(mapa2); // Output: Map(4) {"nombre" => "kEnAi", "edad" => 7, "animal" => "perro", null => "nulo"}

const llavesMapa2  = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);  // Output: (4) ["nombre", "edad", "animal", null]
console.log(valoresMapa2); // Output: (4) ["kEnAi", 7, "perro", "nulo"]