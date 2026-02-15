const d = document;

/**
 * [ENGLISH]
 * The State.
 * 
 * =======
 * 
 * [SPANISH]
 * El Estado.
 */
const state = {
    todoList:[]
};

/**
 * [ENGLISH]
 * Template UI.
 * 
 * =======
 * 
 * [SPANISH]
 * Plantilla UI.
 */
const template = () => {
    if(state.todoList.length < 1){
        return `<p><em>Lista sin tareas por hacer.</em></p>`;
    }

    let todos = state.todoList.map((item) => `<li>${item}</li>`).join("");
    return todos;
};

/**
 * [ENGLISH]
 * Render UI.
 * 
 * =======
 * 
 * [SPANISH]
 * Render UI.
 */
const render = () => {
    // console.log(state); // For Example. Output: {todoList: Array(0)}
    const $list = d.getElementById("todo-list");
    if(!$list) return;

    $list.innerHTML = template();
};

d.addEventListener("DOMContentLoaded", render);

d.addEventListener("submit", (e) => {
    if(!e.target.matches("#todo-form")) return false;
    e.preventDefault();

    const $item = d.getElementById("todo-item");
    if(!$item) return;

    /**
     * [ENGLISH]
     * Update the 'State' and the UI.
     * 
     * =======
     * 
     * [SPANISH]
     * Actualizar el 'State' y la UI.
     */
    state.todoList.push($item.value);
    render();

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