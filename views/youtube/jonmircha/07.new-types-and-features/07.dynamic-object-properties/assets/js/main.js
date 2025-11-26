/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 */

const objUsuariosVacio = {};
console.log(objUsuariosVacio);

const usuarios = ["jon", "irma", "Miguel", "Kala", "kEnAi"];

usuarios.forEach((usuario, index) => objUsuariosVacio[`id_${index}`] = usuario);
console.log(objUsuariosVacio);

let aleatorio = Math.round(Math.random() * 100 + 5);
const objUsuariosNoVacio = {
    [`id_${aleatorio}`]: "Valor Aleatorio",
};
console.log(objUsuariosNoVacio);
usuarios.forEach((usuario, index) => objUsuariosNoVacio[`id_${index}`] = usuario);