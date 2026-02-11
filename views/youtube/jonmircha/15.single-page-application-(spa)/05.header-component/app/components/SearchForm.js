export function SearchForm() {
    const $searchForm = document.createElement("form");
    const $input     = document.createElement("input");
    $searchForm.classList.add("form-search");

    $input.name        = "search";
    $input.type        = "search";
    $input.placeholder = "Buscar...";

    $searchForm.appendChild($input);
    return $searchForm;
}