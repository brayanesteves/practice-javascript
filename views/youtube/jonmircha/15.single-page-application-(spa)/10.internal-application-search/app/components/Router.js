import   api        from "../helpers/wp_api.js";
import { ajax }     from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post }     from "./Post.js";

export async function Router() {
    const d = document;
    const w = window;

    const $main = d.getElementById("main");

    let { hash } = w.location;
    // console.log(hash); // For Example. Output: #/

    $main.innerHTML = null;

    if(!hash || hash === "#/") {
        // $posts.innerHTML = "<h2>Sección del Home.</h2>";
        await ajax({
            url: api.POSTS_EMBED,
            cbSuccess:(posts) => {
                // console.log(posts); // For Example. Output: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
                let html = "";
                posts.forEach((post) => (html += PostCard(post)));
                d.querySelector(".loader").style.display = "none";
                $main.innerHTML = html;
            },
        });
    } else if(hash.includes("#/search")) {
        // $main.innerHTML = "<h2>Sección del Buscador.</h2>";

        let query = localStorage.getItem("wpSearch");

        if(!query) return false;

        await ajax({
            url: `${api.SEARCH}?search=${query}`,
            cbSuccess:(search) => {
                // console.log(search); // For Example. Output: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
                let html = "";
                search.forEach((post) => (html += PostCard(post)));
                d.querySelector(".loader").style.display = "none";
                $main.innerHTML = html;
            },
        });

        // d.querySelector(".loader").style.display = "none";
    } else if(hash.includes("#/contacto")) {
        $main.innerHTML = "<h2>Sección de Contacto.</h2>";
        // d.querySelector(".loader").style.display = "none";
    } else {
        // $main.innerHTML = "<h2>Aquí cargará el contenido de el Post previamente seleccionado.</h2>";
        // d.querySelector(".loader").style.display = "none";
        // console.log(`${api.POSTS}/${localStorage.getItem("wpPostId")}`); // For Example. Output: https://malvestida.com//wp/v2/posts/45063

        await ajax({
            url: `${api.POSTS}/${localStorage.getItem("wpPostId")}`,
            cbSuccess:(post) => {
                // console.log(post); // For Example. Output: {id: 45063, data: "2020-11-11T12:25:47", data_gmt: "2020-11-11T12:25:47", guid: {...}, modified: "2020-11-11T14:26:45", ...}
                
                $main.innerHTML = Post(post);
            },
        });
    }

    d.querySelector(".loader").style.display = "none";
}