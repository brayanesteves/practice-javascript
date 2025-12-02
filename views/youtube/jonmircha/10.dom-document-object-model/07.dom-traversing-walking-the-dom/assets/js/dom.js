/**
 * [ENGLISH]
 * DOM Traversing and Walking the DOM.
 * ====================
 * [SPANISH]
 * Recorriendo y navegando el DOM.
 */

const $cards = document.querySelector(".cards");
console.log($cards);                                 // Output: <section class="cards">...</section>
console.log($cards.children);                        // Output: HTMLCollection(5) [figure.card, figure.card, figure.card, figure.card, figure.card]
console.log($cards.childNodes);                      // Output: NodeList(11) [#text, figure.card, #text, figure.card, #text, figure.card, #text, figure.card, #text, figure.card, #text]
console.log($cards.children[2]);                     // Output: <figure class="card">...</figure>
console.log($cards.parentElement);                   // Output: <body>...</body>
console.log($cards.parentNode);                      // Output: <body>...</body>
console.log($cards.firstChild);                      // Output: #text
console.log($cards.firstElementChild);               // Output: <figure class="card">...</figure>
console.log($cards.lastChild);                       // Output: #text
console.log($cards.lastElementChild);                // Output: <figure class="card">...</figure>
console.log($cards.previousSibling);                 // Output: #text
console.log($cards.previousElementSibling);          // Output: <a class="link-dom" href="dom.html" style="background:#F7DF1E; color:#222;" data-id="1" data-description="Document Object Model">DOM</a>
console.log($cards.nextElementSibling);              // Output: <script src="./assets/js/main.js"></script>
console.log($cards.closest("div"));                  // Output: null
console.log($cards.closest("body"));                 // Output: <body>...</body>
console.log($cards.children[3].closest("section"));  // Output: <section class="cards">...</section>