const d = document;

const app = new Component({
    el:"#todo-list",
    data: {
        todoList:[]
    },
    template:function(props) {
        if(props.todoList.length < 1){
            return `<p><em>Lista sin tareas por hacer.</em></p>`;
        }

        let todos = props.todoList.map((item) => `<li>${item}</li>`).join("");
        return todos;
    },
});


d.addEventListener("DOMContentLoaded", app.render);

/**
 * [ENGLISH]
 * Setting default values to the 'State'.
 * 
 * =======
 * 
 * [SPANISH]
 * Estableciendo valores por defecto al 'State'.
 */
app.setState({
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
    const lastState = app.getState();
    lastState.todoList.push($item.value);
    app.setState({ todoList: lastState.todoList });

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