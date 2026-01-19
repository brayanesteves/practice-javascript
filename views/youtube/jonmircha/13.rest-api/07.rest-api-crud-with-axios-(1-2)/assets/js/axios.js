const d = document;

const $table    = d.querySelector(".crud-table");
const $form     = d.querySelector(".crud-form");
const $title    = d.querySelector(".crud-title");
const $template = d.getElementById("crud-template").content;
const $fragment = d.createDocumentFragment();

const getAll = async () => {
    try {
        let res  = await axios.get("http://localhost:5555/santos");
        let json = await res.data;

        // console.log(json); // For Example. Output: (9) [{...}, {...}, {...}, {...}, {...}, {...}, {...}, {...}, {...}]
        json.forEach((el) => {
            $template.querySelector(".name").textContent           = el.nombre;
            $template.querySelector(".constellation").textContent  = el.constelacion;
            $template.querySelector(".edit").dataset.id            = el.id;
            $template.querySelector(".edit").dataset.name          = el.nombre;
            $template.querySelector(".edit").dataset.constellation = el.constelacion;
            $template.querySelector(".delete").dataset.id          = el.id;
                
            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });
        $table.querySelector("tbody").appendChild($fragment);
    } catch(err) {
        let message = err.statusText || "Ocurrió un error.";
        $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
    }
};

d.addEventListener("DOMContentLoaded", getAll);