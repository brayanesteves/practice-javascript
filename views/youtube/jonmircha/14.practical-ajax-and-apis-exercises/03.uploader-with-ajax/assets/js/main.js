const d = document;

const $main  = d.querySelector("main");
const $files = d.getElementById("files");

const uploader = (file) => {
    // console.log(file); // For Example. Output: File {name: "recursos-responsive-design.zip", lastModified: 1574883348066, lastModifiedDate: Wed Nov 27 2019 13:35:48 GMT-0600 (hora estándar central), webkitRelativePath: "", size: 24090496, ...} File {name: "vue-handbook.pdf", lastModified: 1576279619388, lastModifiedDate: Fri Dec 13 2019 17:26:59 GMT-0600 (hora estándar central), webkitRelativePath: "", size: 11924092, ...} File {name: "css-handbook.pdf", lastModified: 1576279937287, lastModifiedDate: Fri Dec 13 2019 17:32:17 GMT-0600 (hora estándar central), webkitRelativePath: "", size: 3107509, ...}
    const xhr      = new XMLHttpRequest();
    const formData = new FormData();

    formData.append("file", file);

    xhr.addEventListener("readystatechange", (e) => {
        if(xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            console.log(xhr.responseText); // For Example. Output: {err: false, status: 200, statusText: "Archivo YouTubePosterLive.png.jpg subido con éxito.", files: {...}} {err: false, status: 200, statusText: "Archivo jonmircha.jpg subido con éxito.", files: {...}} {err: false, status: 200, statusText: "Archivo css-hanbook.pdf subido con éxito.", files: {...}} {err: false, status: 200, statusText: "Archivo Fitness VOD - Frontend Plataforma.pdf subido con éxito.", files: {...}} {err: false, status: 200, statusText: "Archivo vue-handbook.pdf subido con éxito.", files: {...}} {err: false, status: 200, statusText: "Archivo rcursos-responsive-design.zip subido con éxito.", files: {...}}
            console.log(json); // For Example. Output: {err: false, status: 200, statusText: "Archivo YouTubePosterLive.png.jpg subido con éxito.", files: {...}} {err: false, status: 200, statusText: "Archivo jonmircha.jpg subido con éxito.", files: {...}} {err: false, status: 200, statusText: "Archivo css-hanbook.pdf subido con éxito.", files: {...}} {err: false, status: 200, statusText: "Archivo Fitness VOD - Frontend Plataforma.pdf subido con éxito.", files: {...}} {err: false, status: 200, statusText: "Archivo vue-handbook.pdf subido con éxito.", files: {...}} {err: false, status: 200, statusText: "Archivo rcursos-responsive-design.zip subido con éxito.", files: {...}}
        } else {
            let message = xhr.statusText || "Ocurrió un error";
            console.error(`Error ${xhr.status}: ${message}`);
        }
    });

    xhr.open("POST", "php/server/uploader.php");
    xhr.setRequestHeader("enc-type", "multipart/form-data");
    xhr.send(formData);
};

d.addEventListener("change", (e) => {
    if(e.target === $files) {
        // console.log(e.target.files); // For Example. Output: FileList {0: File, 1: File, 2: File, length: 3}
        
        const files = Array.from(e.target.files);
        files.forEach((el) => uploader(el));
    }
});