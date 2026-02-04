const d = document;

const $shows    = d.getElementById("shows");
const $template = d.getElementById("show-template").content;
const $fragment = d.createDocumentFragment();

d.addEventListener("keypress", async (e) => {
    if(e.target.matches("#search")) {
        // console.log(e.key); // For Example. Output: a
        // console.log(e.key, e.keyCode); // For Example. Output: a 65

        if(e.key === "Enter") {
            try {
                $shows.innerHTML = `
                    <div class="loader">
                        <img src="./assets/img/svg/loader.svg" alt="Cargando..." />
                    </div>
                `;

                let query = e.target.value.toLowerCase();
                let res   = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
                let json  = await res.json();

                // console.log(api, res, json); // For Example. Output: https://api.tvmaze.com/search/shows?q=batman Response {type: "cors", url: "https://api.tvmaze.com/search/shows?q=batman", redirected: false, status: 200, ok: true, ...} (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
                
                if(!res.ok) throw { status: res.status, statusText: res.statusText };

                if(json.length === 0) {
                    $shows.innerHTML = `<h2>No existen resultados de shows para el criterio de búsqueda: <mark>${query}</mark>.</h2>`;
                } else {
                    json.forEach((el) => {
                        $template.querySelector("h3").textContent     = el.show.name;
                        $template.querySelector("div").innerHTML      = el.show.summary ? el.show.summary : "Sin descripción.";
                        $template.querySelector("img").src            = el.show.image ? el.show.image.medium : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
                        $template.querySelector("img").alt            = el.show.name;
                        $template.querySelector("img").style.maxWidth = "100%";
                        $template.querySelector("a").href             = el.show.url ? el.show.url : "#";
                        $template.querySelector("a").target           = el.show.url ? "_blank" : "_self";
                        $template.querySelector("a").textContent      = el.show.url ? "Ver más..." : "";

                        let $clone = d.importNode($template, true);
                        $fragment.appendChild($clone);
                    });
                    $shows.innerHTML = "";
                    $shows.appendChild($fragment);
                }
            } catch(err) {
                console.log(err); // For Example. Output: TypeError: Failed to fetch
                let message = err.statusText || "Ocurrió un error.";
                $shows.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
            }
        }
    }
});