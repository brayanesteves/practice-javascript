import   api    from "./helpers/wp_api.css-tricks.js";
import { ajax } from "./helpers/ajax.js";

export function App() {
    const d = document;
    
    const $root = d.getElementById("root");
    
    $root.appendChild(Header());
    $root.appendChild(Posts());
    $root.appendChild(Loader());
    
    ajax({
        url: api.POSTS_EMBED,
        cbSuccess:(posts) => {
            // console.log(posts); // For Example. Output: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
            let html = "";
            posts.forEach((post) => (html += PostCard(post)));
            d.querySelector(".loader").style.display = "none";
            d.getElementById("posts").innerHTML = html;
        },
    });
}