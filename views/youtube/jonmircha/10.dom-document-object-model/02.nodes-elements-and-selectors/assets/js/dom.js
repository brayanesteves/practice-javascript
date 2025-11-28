/**
 * [ENGLISH]
 * ====================
 * [SPANISH]
 */

console.log(document.getElementsByTagName("li"));              // Output: HTMLCollection(16) [li, li, li, li, li, li, li, li, li, li, li, li, li, li, li, li]
console.log(document.getElementsByClassName("card"));          // Output: HTMLCollection(5) [div.card, div.card, div.card, div.card, div.card]
console.log(document.getElementsByName("nombre"));             // Output: NodeList [input]
console.log(document.getElementsById("menu"));                 // Output: <nav id="menu">...</nav>
console.log(document.querySelector("#menu"));                  // Output: <nav id="menu">...</nav>
console.log(document.querySelector("a"));                      // Output: <a href="#">Sección 1</a>
console.log(document.querySelectorAll("a"));                   // Output: NodeList(6) [a, a, a, a, a, a.link-dom]
console.log(document.querySelectorAll("a").length);            // Output: 6
document.querySelectorAll("a").forEach(el => console.log(el)); // Output: <a href="#">Sección 1</a> <a href="#">Sección 2</a> <a href="#">Sección 3</a> <a href="#">Sección 4</a> <a href="#">Sección 5</a> <a class="link-dom" href="dom.html">DOM</a>
console.log(document.querySelector(".card"));                  // Output: <figure class="card">...</figure>
console.log(document.querySelectorAll(".card"));               // Output: NodeList(5) [figure.card, figure.card, figure.card, figure.card, figure.card]
console.log(document.querySelectorAll(".card")[2]);            // Output: <figure class="card">...</figure>
console.log(document.querySelector("#menu li"));               // Output: <li><a href="#">Sección 1</a></li>
console.log(document.querySelectorAll("#menu li"));            // Output: NodeList(5) [li, li, li, li, li]