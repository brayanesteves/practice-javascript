const a = [];
const b = [1, true, "Hola", ["A", "B", "C"], [1, 2, 3]];
console.log(a); // []
console.log(b); // [1, true, "Hola", Array(3)]
console.log(b.length); // 4
console.log(b[2]); // Hola
console.log(b[0]); // 1
console.log(b[3]); // (3) ["A", "B", "C"]
console.log(b[3][2]); // C
console.log(b[3][3][0]); // 1

const c = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(c); // (6) ["X", "Y", "Z", 9, 8, 7]

const d = Array(100).fill(false);
console.log(d);

const e = new Array();
console.log(e);

const f = new Array(1, 2, 3, true, false);
console.log(f);

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores); // (3) ["Rojo", "Verde", "Azul"]
colores.push("Negro");
console.log(colores); // (4) ["Rojo", "Verde", "Azul", "Negro"]

colores.pop();
console.log(colores); // (3) ["Rojo", "Verde", "Azul"]

colores.forEach(function(el, index) {
    console.log(`<li id="${index}">${el}</li>`);
});
