import {
  SET_AUTHENTICATE,
  SET_ID_TOKEN,
  SET_SHOPS,
  DELETE_SHOP,
  SET_USER_SHOPS,
  UPDATE_SHOP,
} from "./actionTypes";
import firebase from "../services/firebase.config";

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
  userShops: [],
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

    const user = firebase.auth().currentUser;
    if (user !== null) {
      const userShops = action.payload.shops.filter(
        (shop) => shop.ownerEmail === user.email
      );
      newState.userShops = userShops;
    }
  }

  if (action.type === SET_USER_SHOPS) {
    newState.userShops = action.payload.userShops;
  }

  if (action.type === DELETE_SHOP) {
    const filteredList = newState.shops.filter(
      (shop) => shop.shopID !== action.payload.shopID
    );
    newState.shops = filteredList;
  }

  if (action.type === UPDATE_SHOP) {
    const filteredList = newState.shops.filter(
      (shop) => shop.shopID !== action.payload.updatedShop.shopID
    );
    filteredList.push(action.payload.updatedShop);
    newState.shops = filteredList;
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
