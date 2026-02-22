import store from "./store-crud.js";

const API_URL = "http://localhost:3000/todos";

const d = document;

const $todoList   = d.getElementById("todo-list");
const $addTodoBtn = d.getElementById("add-todo");
const $todoTitle  = d.getElementById("todo-title");
const $todoId     = d.getElementById("todo-id");

function renderTodos() { }

function fetchTodos() { }

function addOrUpdateTodo() { }

function editTodo() { }

function deleteTodo() { }

function toggleTodoCompleted() { }

function clearForm() { }

store.subscribe(renderTodos);

d.addEventListener("DOMContentLoaded", fetchTodos);