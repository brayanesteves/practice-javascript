const d = document;

const $selectPrimary   = d.getElementById("select-primary");
const $selectSecondary = d.getElementById("select-secondary");
const $selectThird     = d.getElementById("select-third");

function loadState() {
    fetch("https://api-sepomex.hckdrk.mx/query/get_estados").then((res) => res.ok ? res.json() : Promise.reject(res)).then((json) => {
        // console.log(json); // For Example. Output: {error: false, code_error: 0, error_message: null, response: {...}}
        
        let $options = `<option value="mexico">Elige un Estado</option>`;

        json.response.estado.forEach((el) => $options += `<option value="${el}">${el}</option>`);
        $selectPrimary.innerHTML = $options;
    }).catch((err) => {
        // console.log(err); // For Example. Output: 
        let message = err.statusText || "Ocurrio un error.";

        $selectPrimary.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`;
    });
}

function loadTowns(state) {
    fetch(`https://api-sepomex.hckdrk.mx/query/get_municipios/${state}`).then((res) => res.ok ? res.json() : Promise.reject(res)).then((json) => {
        // console.log(json); // For Example. Output: {error: false, code_error: 0, error_message: null, response: {...}}

        let $options = `<option value="mexico">Elige un Municipio</option>`;

        json.response.municipios.forEach((el) => $options += `<option value="${el}">${el}</option>`);
        $selectSecondary.innerHTML = $options;
    }).catch((err) => {
        // console.log(err); // For Example. Output: 
        let message = err.statusText || "Ocurrio un error.";

        $selectSecondary.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`;
    });
}

function loadSuburbs(suburb) {
    fetch(`https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipios/${suburb}`).then((res) => res.ok ? res.json() : Promise.reject(res)).then((json) => {
        // console.log(json); // For Example. Output: {error: false, code_error: 0, error_message: null, response: {...}}

        let $options = `<option value="mexico">Elige una Colonia</option>`;

        json.response.colonia.forEach((el) => $options += `<option value="${el}">${el}</option>`);
        $selectThird.innerHTML = $options;
    }).catch((err) => {
        // console.log(err); // For Example. Output: 
        let message = err.statusText || "Ocurrio un error.";

        $selectThird.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`;
    });
}

d.addEventListener("DOMContentLoaded", loadState);

$selectPrimary.addEventListener("change", (e) => loadTowns(e.target.value));

$selectSecondary.addEventListener("change", (e) => loadSuburbs(e.target.value));