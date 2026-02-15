const d = document;

const $item = d.getElementById("todo-item");
const $list = d.getElementById("todo-list");

d.addEventListener("submit", (e) => {
    if(!e.target.matches("#todo-form")) return false;
    e.preventDefault();


    /**
     * [ENGLISH]
     * Add 'item' to the list.
     * 
     * =======
     * 
     * [SPANISH]
     * Agregar 'item' a la lista.
     */
    let $li = d.createElement("li");
        $li.textContent = $item.value;
        $list.appendChild($li);

    /**
     * [ENGLISH]
     * Clear the 'input'.
     * 
     * =======
     * 
     * [SPANISH]
     * Limpiar el 'input'.
     */
    $item.value = "";
    $item.focus();
});