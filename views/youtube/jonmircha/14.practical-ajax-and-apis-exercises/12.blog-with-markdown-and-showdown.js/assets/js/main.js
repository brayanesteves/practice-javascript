const d = document;

const $main = d.querySelector("main");

fetch("assets/documents/md/javascript.md").then((res) => res.ok ? res.text() : Promise.reject(res)).then((text) => {
    // console.log(text); // For Example. Output: 
    // $main.innerHTML = text; // Incorrect

    $main.innerHTML = new showdown.Converter().makeHtml(text);
}).catch((err) => {
    // console.log(err); // For Example. Output: Response
    let message     = err.statusText || "Ocurrio un error.";
    $main.innerHTML = `Error ${err.status}: ${message}`;
});