/**
 * [ENGLISH]
 * Modifying Elements (Old Style). The Document Object Model (DOM) is a programming interface for HTML and XML documents.
 * The DOM represents the content of the document as objects that can be manipulated.
 * The DOM can be used to access and modify the content, structure, and style of a document.
 * The DOM is a programming interface for HTML and XML documents.
 * The DOM is a representation of the HTML document as an object model.
 * The DOM is used to access and modify the content, structure, and style of an HTML document.
 * ====================
 * [SPANISH]
 * Modificando Elementos (Estilo antiguo). El Modelo de Objeto del Documento (DOM) es una interfaz de programación para documentos HTML y XML.
 * El DOM representa el contenido del documento como objetos que pueden ser manipulados.
 * El DOM puede ser usado para acceder y modificar el contenido, la estructura y el estilo de un documento.
 * El DOM es una interfaz de programación para documentos HTML y XML.
 * El DOM es una representación del documento HTML como un modelo de objetos.
 * El DOM es usado para acceder y modificar el contenido, la estructura y el estilo de un documento HTML.
 */

const $cards      = document.querySelector(".cards");
const $newCard    = document.createElement("figure");
const $cloneCards = $cards.cloneNode(true); // Clona $cards

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any" />
    <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");
// $cards.replaceChild($newCard, $cards.children[2]);       // Reemplaza el tercer hijo de $cards por $newCard
// $cards.removeChild($cards.lastElementChild);             // Elimina el ultimo hijo de $cards
// $cards.insertBefore($newCard, $cards.firstElementChild); // Inserta $newCard antes del primer hijo de $cards
document.body.appendChild($cloneCards);