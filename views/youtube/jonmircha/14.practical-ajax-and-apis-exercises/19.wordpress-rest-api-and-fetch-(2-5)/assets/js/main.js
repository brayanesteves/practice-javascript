const d = document;

const $site     = d.getElementById("site");
const $posts    = d.getElementById("posts");
const $loader   = d.querySelector(".loader");
const $template = d.getElementById("post-template").content;

const fragment   = d.createDocumentFragment();
const DOMAIN     = "https://malvestida.com";
const SITE       = `${DOMAIN}/wp-json`;
const API_WP     = `${SITE}/wp/v2`;
const POSTS      = `${API_WP}/posts`;
const PAGES      = `${API_WP}/pages`;
const CATEGORIES = `${API_WP}/categories`;

function getSiteData() {
    fetch(SITE).then((res) => res.ok ? res.json() : Promise.reject(res)).then((json) => {
        // console.log(json); // For Example. Output: {name: "MALVESTIDA", description: "", url: "https://malvestida.com", home: "https://malvestida.com", gmt_offset: -5, ...}
        $site.innerHTML = `
            <h3>Sitio Web</h3>
            <h2>
                <a href="${json.url}" target="_blank">${json.name}</a>
            </h2>
            <p>${json.description}</p>
            <p>${json.timezone_string}</p>
        `;
    }).catch((err) => {
        console.log(err); // For Example. Output: 
        let message = err.statusText || "Ocurrio un error";
        $site.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    });
}

function getPosts() {
    fetch(POSTS).then((res) => res.ok ? res.json() : Promise.reject(res)).then((json) => {
        // console.log(json); // For Example. Output: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        
    }).catch((err) => {
        console.log(err); // For Example. Output: 
        let message = err.statusText || "Ocurrio un error";
        $posts.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        $loader.style.display = "none";
    });
}

d.addEventListener("DOMContentLoaded", (e) => {
    getSiteData();
    getPosts();
});