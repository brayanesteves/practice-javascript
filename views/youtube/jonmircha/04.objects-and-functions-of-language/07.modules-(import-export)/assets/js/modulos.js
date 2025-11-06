console.log("Archivo modulos.js");

import saludar, { PI, usuario } from "./constantes.js";
import { sumarFunction, restarFunction, aritmetica, aritmetica as calculos, } from "./aritmetica.js";

console.log(PI, usuario);

console.log(sumarFunction(3, 4));
console.log(restarFunction(10, 5));

console.log(aritmetica.sumarObject(3, 4));
console.log(aritmetica.restarObject(10, 5));

console.log(calculos.sumarObject(3, 4));
console.log(calculos.restarObject(10, 5));

saludar();

let saludo = new Saludar();
saludo;