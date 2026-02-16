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

/**
 * [ENGLISH]
 * Update the 'State' of forma reactive.
 * 
 * =======
 * 
 * [SPANISH]
 * Actualziar el 'State' de forma reactiva.
 */
const setState = (obj) => {
    for(let key in obj) {
        if(state.hasOwnProperty(key)) {
            state[key] = obj[key];
        }
    }

    render();
};

/**
 * [ENGLISH]
 * Obtain an immutable copy of the 'State'.
 * 
 * =======
 * 
 * [SPANISH]
 * Obtenemos una copia inmutable del 'State'.
 */
const getState = () => JSON.parse(JSON.stringify(state));

d.addEventListener("DOMContentLoaded", render);

/**
 * [ENGLISH]
 * Setting default values to the 'State'.
 * 
 * =======
 * 
 * [SPANISH]
 * Estableciendo valores por defecto al 'State'.
 */
setState({
    todoList: ["Tarea 1", "Tarea 2", "Tarea 3"],
    // nombre: "Jon",
    nombre: ""
});

/**
 * [ENGLISH]
 * State Mutable, because it allows to modify the state directly creating a copy.
 * 
 * =======
 * 
 * [SPANISH]
 * Estado Mutable, porque permite modificar el estado directamente creando una copia.
 */
// const items = state.todoList;
const items = getState();
// items.push("Tarea 4");
items.todoList.push("Tarea 4");
// console.log("Estado Mutable", items); // For Example. Output: Estado Mutable {todoList: Array(4), nombre: "Jon"}
// console.log("Estado Inmutable", items); // For Example. Output: Estado Mutable {todoList: Array(3), nombre: "Jon"}

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
    const lastState = getState();
    lastState.todoList.push($item.value);
    setState({ todoList: lastState.todoList });

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