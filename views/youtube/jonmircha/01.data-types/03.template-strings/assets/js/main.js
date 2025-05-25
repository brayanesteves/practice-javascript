let nombre = "Jon";
let apellido = "MirCha";

// Concatenación.
let saludo_concatenacion = "Hola mi nombre es " + nombre + " " + apellido + ".";
console.log(saludo_concatenacion);

// Interpolación de variables.
// Template String.
let saludo_template = `Hola mi nombre es  ${nombre} ${apellido}.`;
console.log(saludo_template);

let ul_oneline = "<ul><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul>";
console.log(ul_oneline);

let ul_template = `<ul>
    <li>Primavera</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
</ul>`;
console.log(ul_template);

let ul_oneline_symbol_plus  = "<ul>";
    ul_oneline_symbol_plus += "<li>Primavera</li>";
    ul_oneline_symbol_plus += "<li>Verano</li>";
    ul_oneline_symbol_plus += "<li>Otoño</li>";
    ul_oneline_symbol_plus += "<li>Invierno</li>";
    ul_oneline_symbol_plus += "</ul>";
console.log(ul_oneline_symbol_plus);