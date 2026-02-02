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

const moneyFormat = (num) => `$${num.slice(0, -2)}.${num.slice(-2)}`;

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
            ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
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

d.addEventListener("click", (e) => {
    // console.log(e.target); // For Example. Outout: <section id="tacos" class="tacos">...</section>
    if(e.target.matches(".taco *")) {
        // alert("A comprar.");
        let price = e.target.parentElement.getAttribute("data-price");
        // console.log(price); // For Example. Output: price_1HHdTrBAL05fqYnxcVAcd0Vv

        Stripe(STRIPE_KEYS.public).redirectToCheckout({
            lineItems: [{ price: price, quantity: 1, }],
            mode:"subscription",
            // successUrl:"http://127.0.0.1:5501/views/youtube/jonmircha/14.practical-ajax-and-apis-exercises/11.online-payments-with-fetch-and-stripe-(4-4)/views/stripe-success.html",
            successUrl:"http://127.0.0.1:5500/ajax-ejercicios/assets/stripe-success.html",
            // cancelUrl:"http://127.0.0.1:5501/views/youtube/jonmircha/14.practical-ajax-and-apis-exercises/11.online-payments-with-fetch-and-stripe-(4-4)/views/stripe-cancel.html",
            cancelUrl:"http://127.0.0.1:5500/ajax-ejercicios/assets/stripe-cancel.html",
            sessionId: price,
        }).then((res) => {
            console.log(res); // Output: 
            if(res.error) {
                $tacos.insertAdjacentHTML("afterend", res.error.message);
            }
        });
    }
});