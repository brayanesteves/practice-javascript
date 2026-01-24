const d = document;

const $main     = d.querySelector("main");
const $dropZone = d.querySelector(".drop-zone");

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

const progressUpload = (file) => {
    const $progress = d.createElement("progress");
    const $span     = d.createElement("span");

    $progress.value = 0;
    $progress.max   = 100;

    $main.insertAdjacentElement("beforeend", $progress);
    $main.insertAdjacentElement("beforeend", $span);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("progress", (e) => {
        // console.log(e); // For Example. Output: ProgressEvent {isTrusted: true, lengthComputable: true, loaded: 396079, total: 396079, type: "progress", ...}
        let progress = parseInt(e.loaded * 100) / e.total;
        $progress.value = progress;
        $span.innerHTML = `<b>${file.name} - ${progress}%</b>`;
    });

    fileReader.addEventListener("loadend", (e) => {
        uploader(e.target.result);
        setTimeout(() => {
            $main.removeChild($progress);
            $main.removeChild($span);
        }, 3000);
    });    
};

$dropZone.addEventListener("dragover", (e) => {
    // console.log(e); // For Example. Output: DragEvent {isTrusted: true, dataTransfer: DataTransfer, screenX: -1068, screenY: 436, clientX: 197, ...}
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("is-active");
});

$dropZone.addEventListener("dragleave", (e) => {
    // console.log(e); // For Example. Output: DragEvent {isTrusted: true, dataTransfer: DataTransfer, screenX: -970, screenY: 283, clientX: 295, ...}
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("is-active");
});

$dropZone.addEventListener("drop", (e) => {
    // console.log(e); // For Example. Output: DragEvent {isTrusted: true, dataTransfer: DataTransfer, screenX: -1071, screenY: 397, clientX: 194, ...}
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("is-active");
    const files = Array.from(e.dataTransfer.files);
    files.forEach((el) => progressUpload(el));
    e.target.classList.remove("is-active");
});