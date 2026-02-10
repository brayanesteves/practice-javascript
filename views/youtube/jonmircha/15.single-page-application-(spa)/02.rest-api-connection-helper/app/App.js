import api from "./helpers/wp_api.js";

export function App() {
    document.getElementById("root").innerHTML = `<h1>Bienvenidos a mi primer SPA con Vanilla JS</h1>`;

    // console.log(api); // For Example. Output: {NAME: "malvestida", DOMAIN: "https://malvestida.com", SITE:"https://malvestida.com/wp-json", API_WP: "https://malvestida.com/wp-json/v2", POSTS: "https://malvestida.com/wp-json/wp/v2/posts?_embed", ...}
}