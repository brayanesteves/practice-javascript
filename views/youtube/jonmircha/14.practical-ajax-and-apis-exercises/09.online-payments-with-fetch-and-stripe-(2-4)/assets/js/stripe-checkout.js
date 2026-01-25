import STRIPE_KEYS from "./stripe-keys.js";

console.log(STRIPE_KEYS); // For Example. Output: {public: "Your Public Stripe Key", secret: "Your Secret Stripe Key"}

const d = document;

const $tacos    = d.getElementById("tacos");
const $template = d.getElementById("taco-template").content;
const $fragment = d.createDocumentFragment();

fetch("https://api.stripe.com/v1/products", {
    headers: {
        Authorization: `Bearer ${STRIPE_KEYS.secret}`
    }
}).then((res) => {
    // console.log(res); // For Example. Output: Response {type: "cors", url: "https://api.stripe.com/v1/products", redirected: false, status: 401, ok: false, ...​}
    return res.json();
}).then((json) => {
    // console.log(json); // For Example. Output: {object: list, data: Array(5), has_more: false, url: "/v1/products"}     
}).catch(err => console.log(err));

fetch("https://api.stripe.com/v1/prices", {
    headers: {
        Authorization: `Bearer ${STRIPE_KEYS.secret}`
    }
}).then((res) => {
    // console.log(res); // For Example. Output: Response {type: "cors", url: "https://api.stripe.com/v1/products", redirected: false, status: 401, ok: false, ...​}
    return res.json();
}).then((json) => {
    // console.log(json); // For Example. Output: {object: list, data: Array(5), has_more: false, url: "/v1/products"}      
}).catch(err => console.log(err));