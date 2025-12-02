/**
 * [ENGLISH]
 * Text and HTML. Manipulating CSS styles through the DOM.
 * ====================
 * [SPANISH]
 * Texto y HTML. Manipulación de estilos CSS a través del DOM.
 */

const $whatsIsDOM_innerText   = document.getElementById("que-es-innerText");
const $whatsIsDOM_textContent = document.getElementById("que-es-textContent");
const $whatsIsDOM_innerHTML   = document.getElementById("que-es-innerHTML");
const $whatsIsDOM_outerHTML   = document.getElementById("que-es-outerHTML");

let text = `
    <p>
        El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
        Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

$whatsIsDOM_innerText.innerText     = text; // No se recomienda usarlo ya que no es compatible con todos los navegadores y es lento.
$whatsIsDOM_textContent.textContent = text; // Es compatible con todos los navegadores y es lento.
$whatsIsDOM_innerHTML.innerHTML     = text; // Es compatible con todos los navegadores y es lento.
$whatsIsDOM_outerHTML.outerHTML     = text; // Es compatible con todos los navegadores y es lento.