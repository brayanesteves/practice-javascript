/**
 * [ENGLISH]
 * CSS Classes. Manipulating CSS styles through the DOM.
 * ====================
 * [SPANISH]
 * Clases CSS. Manipulación de estilos CSS a través del DOM.
 */

const $card = document.querySelector(".card");

console.log($card);                                 // Output: <figure class="card">...</figure>
console.log($card.className);                       // Output: card
console.log($card.classList);                       // Output: DOMTokenList [card]
console.log($card.classList.contains("rotate-45")); // Output: false

$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45")); // Output: true
console.log($card.className);                       // Output: card rotate-45
console.log($card.classList);                       // Output: DOMTokenList [card, rotate-45]

$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45")); // Output: false

$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45")); // Output: true

$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");