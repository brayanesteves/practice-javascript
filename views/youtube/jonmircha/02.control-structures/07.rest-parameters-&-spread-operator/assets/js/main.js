function sumar(a, b, ...c) {
    let resultado = a + b;

    c.forEach(function(n) {
        resultado += n;
    });

    return resultado;
}

console.log(sumar(1, 2)); // Output: 3
console.log(sumar(1, 2, 3)); // Output: 6
console.log(sumar(1, 2, 3, 4)); // Output: 10
console.log(sumar(1, 2, 3, 4, 5)); // Output: 15
console.log(sumar(1, 2, 3, 4, 5, 6)); // Output: 21
console.log(sumar(1, 2, 3, 4, 5, 6, 7)); // Output: 28

console.log();

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];

/**
 * Output:
 * (5) [1, 2, 3, 4, 5]
 * (5) [6, 7, 8, 9, 0]
 */
console.log(arr1, arr2);

let arr3 = [arr1, arr2];
console.log(arr3); // Ouput: (2) [Array(5), Array(5)]

arr3 = [...arr1, ...arr2];
console.log(arr3); // Ouput: (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]