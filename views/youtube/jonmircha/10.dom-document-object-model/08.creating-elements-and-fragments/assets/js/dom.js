/**
 * [ENGLISH]
 * Creating Elements and Fragments. The Document Object Model (DOM) is a programming interface for HTML and XML documents.
 * The DOM represents the content of the document as objects that can be manipulated.
 * The DOM can be used to access and modify the content, structure, and style of a document.
 * The DOM is a programming interface for HTML and XML documents.
 * ====================
 * [SPANISH]
 * Creación de Elementos y Fragmentos. El Modelo de Objeto del Documento (DOM) es una interfaz de programación para documentos HTML y XML.
 * El DOM representa el contenido del documento como objetos que pueden ser manipulados.
 * El DOM puede ser usado para acceder y modificar el contenido, la estructura y el estilo de un documento.
 * El DOM es una interfaz de programación para documentos HTML y XML.
 */

const $figure         = document.createElement("figure");
const $figure2        = document.createElement("figure");
const $img            = document.createElement("img");
const $figcaption     = document.createElement("figcaption");
const $figcaptionText = document.createTextNode("Animals");
const $cards          = document.querySelector(".cards");

$img.setAttribute("src", "https://placeimg.com/200/200/tech");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/people" alt="People" />
    <figcaption>People</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
const $ul        = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"];
const $ul2        = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = "";

continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));


const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];
const $ul3 = document.createElement("ul");
const $fragment = document.createDocumentFragment();
meses.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});
document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);