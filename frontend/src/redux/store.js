import { SET_AUTHENTICATE, SET_ID_TOKEN, SET_SHOPS } from "./actionTypes";

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
  idToken: "",
  shops: [],
};

const myReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === SET_AUTHENTICATE) {
    newState.isAuthenticated = action.payload.isAuthenticated;
  }

  if (action.type === SET_ID_TOKEN) {
    newState.idToken = action.payload.idToken;
  }

  if (action.type === SET_SHOPS) {
    newState.shops = action.payload.shops;
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
