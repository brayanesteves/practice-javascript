import   api    from "./helpers/wp_api.css-tricks.js";
import { ajax } from "./helpers/ajax.js";

export function App() {
    document.getElementById("root").innerHTML = `<h1>Bienvenidos a mi primer SPA con Vanilla JS</h1>`;

    // console.log(api); // For Example. Output: {NAME: "malvestida", DOMAIN: "https://malvestida.com", SITE:"https://malvestida.com/wp-json", API_WP: "https://malvestida.com/wp-json/v2", POSTS: "https://malvestida.com/wp-json/wp/v2/posts?_embed", ...}

    ajax({ 
        url:api.POSTS_EMBED,
        cbSuccess:(posts) => {
            console.log(posts); // For Example. Output: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        },
    });

    ajax({ 
        url:api.CATEGORIES,
        cbSuccess:(posts) => {
            console.log(posts); // For Example. Output: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        },
    });
}