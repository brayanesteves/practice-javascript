import store from "./store-crud.js";

const API_URL = "http://localhost:3000/todos";

const d = document;

const $todoList   = d.getElementById("todo-list");
const $addTodoBtn = d.getElementById("add-todo");
const $todoTitle  = d.getElementById("todo-title");
const $todoId     = d.getElementById("todo-id");

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

    state.todos.forEach((todo) => {
        const $li = d.createElement("li");
        $li.textContent = todo.title;
        $todoList.appendChild($li);
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
function addOrUpdateTodo() { }

/**
 * [ENGLISH]
 * Function to edit a task (Fill the form).
 * 
 * ========
 * 
 * [SPANISH]
 * Función para editar una tarea (Llenar el formulario).
 */
function editTodo() { }

/**
 * [ENGLISH]
 * Function to delete a task.
 * 
 * ========
 * 
 * [SPANISH]
 * Función para eliminar una tarea.
 */
function deleteTodo() { }

/**
 * [ENGLISH]
 * Function to mark or unmark a task as completed.
 * 
 * ======== 
 * [SPANISH]
 * Función para marcar o desmarar una tarea como completada.
 */
function toggleTodoCompleted() { }

/**
 * [ENGLISH]
 * Function to clear the form.
 * 
 * ========
 * 
 * [SPANISH]
 * Función para limpiar el formulario.
 */
function clearForm() { }

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