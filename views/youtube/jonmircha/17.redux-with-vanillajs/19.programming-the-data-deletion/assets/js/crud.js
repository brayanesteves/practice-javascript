import store from "./store-crud.js";

const API_URL = "http://localhost:3000/todos";

const d = document;

const $todoList      = d.getElementById("todo-list");
const $addTodoBtn    = d.getElementById("add-todo");
const $todoTitle     = d.getElementById("todo-title");
const $todoId        = d.getElementById("todo-id");
const $todoCompleted = d.getElementById("todo-completed");

/**
 * [ENGLISH]
 * Function to render the tasks with the DOM.
 * 
 * ========
 * 
 * [SPANISH]
 * Función para renderizar las tareas con el DOM.
 */
function renderTodos() {
    const state = store.getState();

    $todoList.innerHTML = "";

    if(state.todos.length === 0) {
        const $noTaskMessage = d.createElement("li");

        $noTaskMessage.className   = "no-tasks";
        $noTaskMessage.textContent = "No hay tareas disponibles.";

        $todoList.appendChild($noTaskMessage);
        return;
    }

    const pendingTodos   = state.todos.filter((todo) => !todo.completed);
    const completedTodos = state.todos.filter((todo) => todo.completed);

    [...pendingTodos, ...completedTodos].forEach((todo) => {
        const $li = d.createElement("li");

        $li.className         = todo.completed ? "completed" : "";
        $li.dataset.id        = todo.id;
        $li.dataset.title     = todo.title;
        $li.dataset.completed = todo.completed;

        $todoList.appendChild($li);

        const $span = d.createElement("span");
        $span.textContent = `${todo.title}`;
        $li.appendChild($span);

        const $toggleBtn = d.createElement("button");
        $toggleBtn.className = "btn-toggle";
        $toggleBtn.textContent = todo.completed ? "Desmarcar" : "Marcar";
        $li.appendChild($toggleBtn);

        const $editBtn = d.createElement("button");
        $editBtn.className = "btn-edit";
        $editBtn.textContent = "Editar";
        $li.appendChild($editBtn);

        const $deleteBtn = d.createElement("button");
        $deleteBtn.className = "btn-delete";
        $deleteBtn.textContent = "Eliminar";
        $li.appendChild($deleteBtn);
    });
}

/**
 * [ENGLISH]
 * Function to make 'fetch' of the tasks from the API.
 * 
 * ========
 * 
 * [SPANISH]
 * Función para hacer 'fetch' de las tareas desde la API.
 */
function fetchTodos() {
    store.dispatch({ type:"FETCH_TODOS_REQUEST" });

    fetch(API_URL).then((response) => response.json()).then((data) => {
        store.dispatch({
               type:"FETCH_TODOS_SUCCESS",
            payload:data,
        });
    }).catch((err) => {
        store.dispatch({
               type:"FETCH_TODOS_FAILURE",
            payload:err.message,
        });
    });
}

/**
 * [ENGLISH]
 * Function to add or update a task.
 * 
 * ========
 * 
 * [SPANISH]
 * Función para añadir o actualizar una tarea.
 */
function addOrUpdateTodo() {
    let title     = $todoTitle.value.trim();
    let id        = $todoId.value;
    let completed = $todoCompleted.value;

    if(!title) {
        alert("Te faltó agregar el título de la tarea.");
        return;
    } // else {
    //     console.log(completed); // For Example. Output: false  <-- (It's String)
    //     alert("Revisa 'consola'.")
    // }

    if(id) {
        /**
         * [ENGLISH]
         * Update task.
         * 
         * ========
         * 
         * [SPANISH]
         * Actualizar tarea.
         */
        const updatedTodo = {
                   id,
                title,
            completed: completed === "true" ? true : false,
        };

        fetch(`${API_URL}/${id}`, {
             method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
               body:JSON.stringify(updatedTodo),
        }).then((response) => response.json()).then((data) => {
            // console.log(data); // For Example. Output: 
            store.dispatch({ type:"UPDATE_TODO", payload:data });            
        });
    } else {
        /**
         * [ENGLISH]
         * Add task.
         * 
         * ========
         * 
         * [SPANISH]
         * Añadir tarea.
         */
        // alert("Añadir tarea.")
        const newTodo = {
                   id:crypto.randomUUID(),
                title,
            completed,
        };
        
        fetch(API_URL, {
             method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
               body:JSON.stringify(newTodo),
        }).then((response) => response.json()).then((data) => {
            // console.log(data); // For Example. Output: 
            store.dispatch({ type:"ADD_TODO", payload:data });
        });
    }
    clearForm();
}

/**
 * [ENGLISH]
 * Function to edit a task (Fill the form).
 * 
 * ========
 * 
 * [SPANISH]
 * Función para editar una tarea (Llenar el formulario).
 */
function editTodo(todo) {
    $todoId.value        = todo.dataset.id;
    $todoTitle.value     = todo.dataset.title;
    $todoCompleted.value = todo.dataset.completed;
}

/**
 * [ENGLISH]
 * Function to delete a task.
 * 
 * ========
 * 
 * [SPANISH]
 * Función para eliminar una tarea.
 */
function deleteTodo(id) {
    let confirmDelete = confirm(`¿Estás seguro de eliminar la tarea con el id "${id}"?`);

    if(confirmDelete) {
        fetch(`${API_URL}/${id}`, {
             method:"DELETE",
        }).then(() => {
            store.dispatch({ type:"DELETE_TODO", payload:id });
        });
    } 
}

/**
 * [ENGLISH]
 * Function to mark or unmark a task as completed.
 * 
 * ======== 
 * [SPANISH]
 * Función para marcar o desmarar una tarea como completada.
 */
function toggleTodoCompleted(todo) {
    const updatedTodo = {
        ...todo,
        completed:!todo.completed,
    };

    fetch(`${API_URL}/${todo.id}`, {
         method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
            body:JSON.stringify(updatedTodo),
    }).then((response) => response.json()).then((data) => {
        // console.log(data); // For Example. Output: 
        store.dispatch({ type:"TOGGLE_TODO", payload:data });            
    });
}

/**
 * [ENGLISH]
 * Function to clear the form.
 * 
 * ========
 * 
 * [SPANISH]
 * Función para limpiar el formulario.
 */
function clearForm() {
    $todoTitle.value     = "";
    $todoId.value        = "";
    $todoCompleted.value = "";
}

/**
 * [ENGLISH]
 * Subscribe the 'render' function to be executed every time the state changes.
 * 
 * ========
 * 
 * [SPANISH]
 * Suscribimos la función 'render' al estado de la 'store'.
 */
store.subscribe(renderTodos);

/**
 * [ENGLISH]
 * The page is loaded, we make a 'fetch' of the tasks.
 * 
 * ========
 * 
 * [SPANISH]
 * Al cargar la página, hacemos 'fetch' de las tareas.
 */
d.addEventListener("DOMContentLoaded", fetchTodos);

$addTodoBtn.addEventListener("click", addOrUpdateTodo);

$todoList.addEventListener("click", (e) => {
    const $parent = e.target.parentElement;
    if(e.target.matches(".btn-edit") && !$parent.matches(".completed")) {
        // alert("Editando.");
        // console.log(e.target.parentElement); // For Example. Output: <li class data.id="1" data-title="Tarea 1">...</li>
        
        editTodo($parent);
    }

    if(e.target.matches(".btn-toggle")) {
        const todo = {
                   id:$parent.dataset.id,
                title:$parent.dataset.title,
            completed:$parent.dataset.completed === "true" ? true : false,
        };
        toggleTodoCompleted(todo);
    }

    if(e.target.matches(".btn-delete")) {
        deleteTodo($parent.dataset.id);
    }
});