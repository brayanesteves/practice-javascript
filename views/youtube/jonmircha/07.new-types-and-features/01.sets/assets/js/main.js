/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 */

const set = new Set([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOLa"]);
console.log(set); // Output: Set(11) {1, 2, 3, 4, 5, ...}
console.log(set.size); // Output: 11

console.log("Recorriendo set."); // Output: Recorriendo set.
for(item of set) {
    console.log(item); // Output: 1, 2, 3, 4, 5, true, false, {}, "hola", "HOLA"
}
console.log(set[0]); // Output: undefined
let arr = Array.from(set);
console.log(arr);             // Output: [1, 2, 3, 4, 5, true, false, {}, "hola", "HOLA"]
console.log(arr[0]);          // Output: 1
console.log(arr[9]);          // Output: hola
set.delete("HOLa");
console.log(set);             // Output: Set(10) {1, 2, 3, 4, 5, ...}
console.log(set.has("hola")); // Output: true
console.log(set.has(19));     // Output: false

console.log();

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});
console.log(set2);      // Output: Set(6) {1, 2, 3, true, false, ...}
console.log(set2.size); // Output: 6

console.log("Recorriendo set2.");        // Output: Recorriendo set2.
set2.forEach(item => console.log(item)); // Output: 1, 2, 3, true, false, {}

set2.clear();
console.log(set2); // Output: Set(0) {}

