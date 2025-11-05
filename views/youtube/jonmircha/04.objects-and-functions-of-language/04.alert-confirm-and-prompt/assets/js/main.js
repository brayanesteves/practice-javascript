console.log(window); // Outpiut: Window {window: Window, self: Window, document: document, name: '', location: Location, …}

window.alert("Hola esto es una alerta."); // Muestra una alerta con el mensaje dado.
window.confirm("Hola esto es una confirmación."); // Muestra una confirmación con el mensaje dado.
window.prompt("Hola esto es un aviso y le permite al usuario ingresar un valor"); // Muestra un aviso con el mensaje dado y un campo para ingresar datos.

alert("Hola esto es una alerta."); // Muestra una alerta con el mensaje dado.
confirm("Hola esto es una confirmación."); // Muestra una confirmación con el mensaje dado.
prompt("Hola esto es un aviso y le permite al usuario ingresar un valor"); // Muestra un aviso con el mensaje dado y un campo para ingresar datos.

let alerta       = alert("Hola esto es una alerta."); // Muestra una alerta con el mensaje dado.
let confirmacion = confirm("Hola esto es una confirmación."); // Muestra una confirmación con el mensaje dado.
let aviso        = prompt("Hola esto es un aviso y le permite al usuario ingresar un valor"); // Muestra un aviso con el mensaje dado y un campo para ingresar datos.

console.log(alerta);       // Output: undefined porque las alertas no retornan ningún valor.
console.log(confirmacion); // Output: true o false dependiendo de la elección del usuario.
console.log(aviso);        // Output: El valor ingresado por el usuario o null si se canceló el aviso.