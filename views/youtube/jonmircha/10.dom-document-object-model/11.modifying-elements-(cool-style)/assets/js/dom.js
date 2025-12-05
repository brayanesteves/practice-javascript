/**
 * [ENGLISH]
 *   1) .insertAdjacent...
 *   a) .insertAdjacentElement(position, el)
 *   b) .insertAdjacentHTML(position, html)
 *   c) .insertAdjacentText(position, text)
 * 2) Positions:
 *    a) beforebegin(previous sibling)
 *    b) afterbegin(first child)
 *    c) beforeend(last child)
 *    d) afterend(next sibling)
 * ====================
 * [SPANISH]
 * 1) .insertAdjacent...
 *   a) .insertAdjacentElement(position, el)
 *   b) .insertAdjacentHTML(position, html)
 *   c) .insertAdjacentText(position, text)
 * 2) Posiciones:
 *    a) beforebegin(hermano anterior)
 *    b) afterbegin(primer hijo)
 *    c) beforeend(ultimo hijo)
 *    d) afterend(hermano siguiente)
 */

const $cards      = document.querySelector(".cards");
const $newCard    = document.createElement("figure");

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any" />
    <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any" />
    <figcaption></figcaption>
`;
$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");

// $cards.insertAdjacentHTML("beforebegin", $newCard);
$cards.insertAdjacentHTML("afterbegin", $newCard);
// $cards.insertAdjacentHTML("beforeend", $newCard);
// $cards.insertAdjacentHTML("afterend", $newCard);

// $cards.prepend($newCard);
// $cards.before($newCard);
// $cards.append($newCard);
// $cards.after($newCard);