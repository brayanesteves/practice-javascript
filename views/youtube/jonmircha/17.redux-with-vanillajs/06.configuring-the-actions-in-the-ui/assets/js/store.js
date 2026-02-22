import * as Redux from "https://unpkg.com/redux@latest/dist/redux.browser.mjs";

/**
 * [ENGLISH]
 * State Initial and Global of the App.
 * 
 * =========
 * 
 * [SPANISH]
 * Estado Inicial y Globlal de la App.
 */
const initialState = {
    counter: 0,
};

/**
 * [ENGLISH]
 * Define the types of actions of the App.
 * 
 * =========
 * 
 * [SPANISH]
 * Definimos los tipos de acciones de la App.
 */
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET     = "RESET";

/**
 * [ENGLISH]
 * Reducer: A pure function that handles state changes based on actions.
 * 
 * =========
 * 
 * [SPANISH]
 * Reducer: Una función pura que gestiona los cambios en el estado en función de las acciones.
 */
function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + action.payload,
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - action.payload,
            };
        case RESET:
            return {
                ...state,
                counter: 0,
            };
        default:
            return state;
    }
}

/**
 * [ENGLISH]
 * Create the 'Store'.
 * 
 * =========
 * 
 * [SPANISH]
 * Creamos la 'Store'.
 */
const store = Redux.createStore(counterReducer);

export default store;