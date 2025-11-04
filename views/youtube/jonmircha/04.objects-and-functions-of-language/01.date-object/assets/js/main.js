console.log(Date()); // Output: Thu Jun 06 2024 18:28:35 GMT+0000 (Coordinated Universal Time)

let fecha = new Date();
console.log(fecha); // Output: 2024-06-06T18:28:35.123Z

console.log(fecha.getDate()); // Output: 6
console.log(fecha.getDay());  // Output: 4
console.log(fecha.getMonth()); // Output: 10
console.log(fecha.getYear()); // Output: 25
console.log(fecha.getFullYear()); // Output: 2025
console.log(fecha.getHours()); // Output: 18
console.log(fecha.getMinutes()); // Output: 28
console.log(fecha.getSeconds()); // Output: 35
console.log(fecha.getMilliseconds()); // Output: 123
console.log(fecha.getTime()); // Output: 1700003315123
console.log(fecha.toString()); // Output: Thu Jun 06 2024 18:28:35 GMT+0000 (Coordinated Universal Time)
console.log(fecha.toDateString()); // Output: Thu Jun 06 2024
console.log(fecha.toLocaleString()); // Output: 6/6/2024, 6:28:35 PM
console.log(fecha.toLocaleDateString()); // Output: 6/6/2024
console.log(fecha.toLocaleTimeString()); // Output: 6:28:35 PM
console.log(fecha.getTimezoneOffset()); // Output: 360
console.log(fecha.getUTCDate()); // Output: 6
console.log(fecha.getUTCHours()); // Output: 18
console.log(Date.now()); // Output: 1700003315123

let compleJon = new Date(1984, 4, 23);
console.log(compleJon); // Output: 1984-05-22T22:00:00.000Z