export function ajax(props) {
    let { url, cbSuccess } = props;

    fetch(url).then((res) => res.ok ? res.json() : Promise.reject(res)).then((json) => cbSuccess(json)).catch((err) => {
        let message = err.statusText || "Ocurrio un error al acceder a la API.";
        document.getElementById("posts").innerHTML = `
            <div class="error>
                <p>Error ${err.status}: ${message}</p>
            </div>
        `;
        document.querySelector(".loader").style.display = "none";

        console.log(err); // For Example. Output: Response {type: 'basic', url: 'http://127.0.0.1:5501/views/youtube/jonmircha/15.s…pplication-(spa)/04.first-ui-components/no-valida', redirected: false, status: 404, ok: false, …}
    });
}