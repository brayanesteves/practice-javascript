/**
 * [ENGLISH]
 * Attributes and Data Attributes. Attributes are special properties
 * that HTML elements have which allow us to configure certain behaviors
 * or characteristics of those elements. We can access these attributes
 * as if they were properties of the instance of the HTML element object.
 * Additionally, we can use the getAttribute() and setAttribute() methods
 * to obtain and set attribute values respectively. We can also use data-attributes
 * to store personalized information in HTML elements, accessing them through
 * the dataset property of the element.
 * ====================
 * [SPANISH]
 * Atributos y Data-Attributes (atributos de datos). Los atributos son propiedades especiales
 * que tienen los elementos HTML y que nos permiten configurar ciertos comportamientos
 * o características de dichos elementos. Podemos acceder a estos atributos como si fueran
 * propiedades de la instancia del objeto del elemento HTML. Además, podemos utilizar
 * los métodos getAttribute() y setAttribute() para obtener y establecer valores de atributos
 * respectivamente. También podemos utilizar data-attributes para almacenar información personalizada
 * en los elementos HTML, accediendo a ellos a través de la propiedad dataset del elemento.
 */

console.log(document.documentElement.language);                                        // Output: es
console.log(document.documentElement.getAttribute("lang"));                            // Output: es
console.log(document.documentElement.querySelector(".link-dom").href);                 // Output: http://127.0.0.1:5500/dom.html
console.log(document.documentElement.querySelector(".link-dom").getAttribute("href")); // Output: dom.html

document.documentElement.lang = "en";
console.log(document.documentElement.language); // Output: en

document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.language); // Output: es-MX

const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel")); // Output: true
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel")); // Output: false

// <Data-Attributes> //
console.log($linkDOM.getAttribute("data-description")); // Output: Document Object Model
console.log($linkDOM.dataset);                          // Output: DOMStringMap {id: "1", description: 'Document Object Model'}
console.log($linkDOM.dataset.description);              // Output: Document Object Model
$linkDOM.setAttribute("data-description", "Modelo de Objetos del Documento.");
console.log($linkDOM.dataset.description);              // Output: Modelo de Objetos del Documento.
$linkDOM.dataset.description = "Suscríbete a mi canal y comparte.";
console.log($linkDOM.dataset.description);              // Output: Suscríbete a mi canal y comparte.
console.log($linkDOM.hasAttribute("data-id"));          // Output: true
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"));          // Output: false
// <.Data-Attributes> //