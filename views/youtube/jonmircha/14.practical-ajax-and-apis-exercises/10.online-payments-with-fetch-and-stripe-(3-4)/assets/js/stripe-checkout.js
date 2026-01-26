import STRIPE_KEYS from "./stripe-keys.js";

console.log(STRIPE_KEYS); // For Example. Output: {public: "Your Public Stripe Key", secret: "Your Secret Stripe Key"}

const d = document;

const $tacos    = d.getElementById("tacos");
const $template = d.getElementById("taco-template").content;
const $fragment = d.createDocumentFragment();

const fetchOptions = {
    headers: {
        Authorization: `Bearer ${STRIPE_KEYS.secret}`
    }
};

let prices;
let products;

Promise.all([
    fetch("https://api.stripe.com/v1/products", fetchOptions),
    fetch("https://api.stripe.com/v1/prices", fetchOptions),
]).then((responses) => Promise.all(responses.map((res) => res.json()))).then((json) => {
    // console.log(json); // For Example. Output: (2) [{...}, {...}]
    products = json[0].data;
    prices   = json[1].data;
    // console.log(products, prices); // For Example. Output: (5) [{...}, {...}, {...}, {...}, {...}] (5) [{...}, {...}, {...}, {...}, {...}]

    prices.forEach((el) => {
        let productData = products.find((product) => product.id === el.product);
        // console.log(productData); // For Example. Output: [{...}] [{...}] [{...}] [{...}] [{...}]

        $template.querySelector(".taco").setAttribute("data-price", el.id);

        $template.querySelector("img").src = productData[0].images[0];
        $template.querySelector("img").alt = productData[0].name;
        $template.querySelector("figcaption").innerHTML = `
            ${productData[0].name}
            <br>
            ${el.unit_amount_decimal} ${el.currency}
        `;

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
    });

    $tacos.appendChild($fragment);
}).catch((err) => {
    // console.log(err); // For Example. Output: 
    let message = err.statusText || "Ocurrio un error al conectarse con la API de Stripe.";
    $tacos.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
});