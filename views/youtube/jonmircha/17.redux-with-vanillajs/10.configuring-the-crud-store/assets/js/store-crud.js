import * as Redux from "https://unpkg.com/redux@latest/dist/redux.browser.mjs";

const initialState = {
      todos:[],
    loading:false,
      error:null,
};

const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

const ADD_TODO    = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

function todoReducer(state = initialState, action) {

}

const store = Redux.createStore(todoReducer);

export default store;