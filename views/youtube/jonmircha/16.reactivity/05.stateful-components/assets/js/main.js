const d = document;

/**
 * [ENGLISH]
 * Global State.
 * 
 * =======
 * 
 * [SPANISH]
 * El Estado global.
 */
const state = {
    todoList:[],
    nombre:""
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
    if(template.data.todoList.length < 1){
        return `<p><em>Lista sin tareas por hacer.</em></p>`;
    }

    let todos = template.data.todoList.map((item) => `<li>${item}</li>`).join("");
    return todos;
};

/**
 * [ENGLISH]
 * Add 'State' to the 'Template' that generates the 'UI' Component (Local State).
 * 
 * =======
 * 
 * [SPANISH]
 * Agregar 'State' al 'Template' que genera el 'Componente' de UI (State Local).
 */
template.data = {
    todoList: []
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
    // console.log("Estado Global", state); // For Example. Output: Estado Global {todoList: Array(0), nombre: ""}
    // console.log("Estado Local", template.data); // For Example. Output: Estado Local {todoList: Array(3)}
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
        if(template.data.hasOwnProperty(key)) {
            template.data[key] = obj[key];
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
const getState = () => JSON.parse(JSON.stringify(template.data));

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
    todoList: ["Tarea 1", "Tarea 2", "Tarea 3"]
});

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