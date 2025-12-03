/**
 * [ENGLISH]
 * HTML Templates. The Document Object Model (DOM) is a programming interface for HTML and XML documents.
 * The DOM represents the content of the document as objects that can be manipulated.
 * The DOM can be used to access and modify the content, structure, and style of a document.
 * The DOM is a representation of the HTML document as an object model.
 * The DOM is a programming interface for HTML and XML documents.
 * ====================
 * [SPANISH]
 * Plantillas HTML. El Modelo de Objeto del Documento (DOM) es una interfaz de programación para documentos HTML y XML.
 * El DOM representa el contenido del documento como objetos que pueden ser manipulados.
 * El DOM puede ser usado para acceder y modificar el contenido, la estructura y el estilo de un documento.
 * El DOM es una representación del documento HTML como un modelo de objetos.
 * El DOM es una interfaz de programación para documentos HTML y XML.
 */

const $cards    = document.querySelector(".cards");
const $template = document.getElementById("template-card").content;
const $fragment = document.createDocumentFragment();
const cardContent = [
    { title: "Tecnología", img: "https://placeimg.com/200/200/tech" },
    { title: "Animales", img: "https://placeimg.com/200/200/animals" },
    { title: "Arquitectura", img: "https://placeimg.com/200/200/arch" },
    { title: "Gente", img: "https://placeimg.com/200/200/people" },
    { title: "Naturaleza", img: "https://placeimg.com/200/200/nature" },
];

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});
$cards.appendChild($fragment);