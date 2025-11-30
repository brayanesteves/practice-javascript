/**
 * [ENGLISH]
 * Styles and CSS Variables. Accessing an element's styles through the style property.
 * ====================
 * [SPANISH]
 * Estilos y Variables CSS. Accediendo a los estilos de un elemento mediante la propiedad style.
 */

const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);                                       // Output: CSSStyleDeclaration {0: "background-color", 1: "color", alignContent: "", alignItems: "", alignSelf: "", aligmentBaseline: "", all: "", ...}
console.log($linkDOM.getAttribute("style"));                       // Output: background:#F7DF1E; color:#222;
console.log($linkDOM.style.backgroundColor);                       // Output: rgb(247, 223, 30)
console.log($linkDOM.style.color);                                 // Output: rgb(34, 34, 34)
console.log(window.getComputedStyle($linkDOM));                    // Output: CSSStyleDeclaration {0: "background-color", 1: "color", 2: "display", 3: "width", 4: "height", ...}
console.log(getComputedStyle($linkDOM).getPropertyValue("color")); // Output: rgb(34, 34, 34)

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");

$linkDOM.style.width        = "50%";
$linkDOM.style.textAlign    = "center";
$linkDOM.style.marginLeft   = "auto";
$linkDOM.style.marginRight  = "auto";
$linkDOM.style.padding      = "1rem";
$linkDOM.style.borderRadius = ".5rem";
console.log($linkDOM.style);                                       // Output: CSSStyleDeclaration {0: "background-color", 1: "color", 2: "text-decoration", 3: "display", 4: "width", ...}  
console.log(getComputedStyle($linkDOM));                           // Output: CSSStyleDeclaration {0: "background-color", 1: "color", 2: "display", 3: "width", 4: "height", ...} 

// <Variables CSS - Custom Properties CSS>
const $html = document.documentElement,
      $body = document.body;

let varDarkColor   = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor); // Output: #222 #F7DF1E

$body.style.backgroundColor = varDarkColor;
$body.style.color           = varYellowColor;

// $html.style.setProperty("--dark-color", "pink");
$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);

// <.Variables CSS - Custom Properties CSS>