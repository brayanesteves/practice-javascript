const d = document;

const $site     = d.getElementById("site");
const $posts    = d.getElementById("posts");
const $loader   = d.querySelector(".loader");
const $template = d.getElementById("post-template").content;

const $fragment  = d.createDocumentFragment();
const DOMAIN     = "https://www.mientrastantoenmexico.mx";
const SITE       = `${DOMAIN}/wp-json`;
const API_WP     = `${SITE}/wp/v2`;
const POSTS      = `${API_WP}/posts`;
const PAGES      = `${API_WP}/pages`;
const CATEGORIES = `${API_WP}/categories`;

fetch(POSTS).then((res) => res.ok ? res.json() : Promise.reject(res)).then((json) => {
    // console.log(json); // For Example. Output: (10) [{...}, {...}, {...}, {...}, {...}, {...}, {...}, {...}, {...}, {...}]
});

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
    $loader.style.display = "block";

    fetch(POSTS_EMBED).then((res) => res.ok ? res.json() : Promise.reject(res)).then((json) => {
        // console.log(json); // For Example. Output: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        
        
        json.forEach((el) => {
            let categories = "";
            let tags       = "";

            el._embedded["wp:term"][0].forEach((el) => categories += `<li>${el.name}</li>`);
            el._embedded["wp:term"][1].forEach((el) => tags += `<li>${el.name}</li>`);

            $template.querySelector(".post-image").src = el._embedded["wp:featuredmedia"][0].source_url;
            $template.querySelector(".post-image").alt = el.title.rendered;
            $template.querySelector(".post-title").textContent = el.title.rendered;
            $template.querySelector(".post-author").innerHTML = `
                <img src="${el._embedded.author[0].avatar_urls["48"]}" alt="${el._embedded["author"][0].name}" />
                <figcaption>${el._embedded.author[0].name}</figcaption>
            `;
            $template.querySelector(".post-date").innerHTML = `${new Date(el.date).toLocaleString()}`;
            $template.querySelector(".post-link").href = el.link;
            $template.querySelector(".post-excerpt").innerHTML = `${el.excerpt.rendered.replace("[&hellip;]", "...")}`;
            $template.querySelector(".post-categories").innerHTML = `
                <p>Categorias</p>
                <ul>${categories}</ul>
            `;
            $template.querySelector(".post-tags").innerHTML = `
                <p>Etiquetas</p>
                <ul>${tags}</ul>
            `;
            $template.querySelector(".post-content").innerHTML = `${el.content.rendered.replace("[&hellip;]", "...")}`;

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });

        $posts.appendChild($fragment);
        $loader.style.display = "none";
    }).catch((err) => {
        // console.log(err); // For Example. Output: 
        let message = err.statusText || "Ocurrio un error";
        $posts.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        $loader.style.display = "none";
    });
}

d.addEventListener("DOMContentLoaded", (e) => {
    getSiteData();
    getPosts();
});