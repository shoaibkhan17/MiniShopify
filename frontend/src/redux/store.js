import { SET_AUTHENTICATE } from "./actionTypes";
const { createStore } = require("redux");

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    console.log(error);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

const initialState = {
  isAuthenticated: false,
};

const myReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === SET_AUTHENTICATE) {
    newState.isAuthenticated = action.payload.isAuthenticated;
  }

  return newState;
};

const persistedState = loadFromLocalStorage();

const store = createStore(
  myReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
