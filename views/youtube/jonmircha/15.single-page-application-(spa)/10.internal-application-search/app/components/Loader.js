export function Loader() {
    const $loader = document.createElement("img");

    $loader.src = "./app/assets/img/svg/loader.svg";
    $loader.alt = "Cargando...";

    $loader.classList.add("loader");

    return $loader;
}