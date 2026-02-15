import   api        from "../helpers/wp_api.js";
import { ajax }     from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";

export function Router() {
    const d = document;
    const w = window;

    const $posts = d.getElementById("posts");

    let { hash } = w.location;
    console.log(hash); // For Example. Output: #/

    $posts.innerHTML = null;

    if(!hash || hash === "#/") {
        // $posts.innerHTML = "<h2>Sección del Home.</h2>";
        ajax({
            url: api.POSTS_EMBED,
            cbSuccess:(posts) => {
                // console.log(posts); // For Example. Output: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
                let html = "";
                posts.forEach((post) => (html += PostCard(post)));
                d.querySelector(".loader").style.display = "none";
                $posts.innerHTML = html;
            },
        });
    } else if(hash.includes("#/search")) {
        $posts.innerHTML = "<h2>Sección del Buscador.</h2>";
    } else if(hash.includes("#/contacto")) {
        $posts.innerHTML = "<h2>Sección de Contacto.</h2>";
    } else {
        $posts.innerHTML = "<h2>Aquí cargará el contenido de el Post previamente seleccionado.</h2>";
    }
}