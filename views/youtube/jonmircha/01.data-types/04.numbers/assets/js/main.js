let a = 2;
let b = new Number(1);
console.log(a, b);

let c = 7.19;
let d = "5.6";
console.log(c.toFixed(1)); // 7.2
console.log(c.toFixed(5)); // 7.19000
console.log(parseInt(c)); // 7
console.log(parseFloat(c)); // 7.19
console.log(typeof c, typeof d); // number string
console.log(a + b); // 3
console.log(c + d); // 7.195.6
console.log(c + parseInt(d)); // 12.190000000000001
console.log(c + parseFloat(d)); // 12.79
console.log(c + Number.parseInt(d)); // 12.190000000000001
console.log(c + Number.parseFloat(d)); // 12.79