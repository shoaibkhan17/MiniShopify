import {
  SET_AUTHENTICATE,
  SET_ID_TOKEN,
  SET_SHOPS,
  DELETE_SHOP,
  SET_USER_SHOPS,
  UPDATE_SHOP,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  SET_PRODUCTS,
  ADD_PRODUCT,
  CREATE_SHOP,
  ADD_PRODUCT_TO_CART,
  UPDATE_CART,
  DELETE_PRODUCT_FROM_CART,
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
  cartProducts: [],
  products: [],
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

  if (action.type === SET_PRODUCTS) {
    newState.products = action.payload.products;
  }

  if (action.type === ADD_PRODUCT_TO_CART) {
    const cartProduct = action.payload.productAdded;

    // Find the cart product in the cart list
    const filteredList = newState.cartProducts.filter(
      (product) => product.productID === cartProduct.productID
    );

    // The item does not exist in the cart
    if (filteredList.length === 0) {
      newState.cartProducts.push(cartProduct);
    }

    // If it does exist, update the selected quantity
    else {
      newState.cartProducts.forEach((product) => {
        if (product.productID === cartProduct.productID) {
          product.selectedQuantity += cartProduct.selectedQuantity;
        }
      });
    }
  }

  if (action.type === UPDATE_CART) {
    newState.cartProducts = action.payload.cartProducts;
  }

  if (action.type === DELETE_PRODUCT_FROM_CART) {
    const cartProduct = action.payload.productDeleted;
    console.log("product to delete:" + cartProduct);

     // Find the cart product in the cart list
    const filteredList = newState.cartProducts.filter(
      (product) => product.productID !== cartProduct.productID
    );
    
    console.log("new cart products:" + filteredList);
    newState.cartProducts = filteredList;
  }

  if (action.type === SET_USER_SHOPS) {
    newState.userShops = action.payload.userShops;
  }

  if (action.type === DELETE_SHOP) {
    const filteredShopList = newState.shops.filter(
      (shop) => shop.shopID !== action.payload.shopID
    );

    const user = firebase.auth().currentUser;
    if (user !== null) {
      const userShops = filteredShopList.filter(
        (shop) => shop.ownerEmail === user.email
      );
      newState.userShops = userShops;
    }

    newState.shops = filteredShopList;
  }

  if (action.type === UPDATE_SHOP) {
    const filteredList = newState.shops.filter(
      (shop) => shop.shopID !== action.payload.updatedShop.shopID
    );
    filteredList.push(action.payload.updatedShop);

    const user = firebase.auth().currentUser;
    if (user !== null) {
      const userShops = filteredList.filter(
        (shop) => shop.ownerEmail === user.email
      );
      newState.userShops = userShops;
    }

    newState.shops = filteredList;
  }

  if (action.type === DELETE_PRODUCT) {
    const filteredList = newState.products.filter(
      (product) => product.productID !== action.payload.productID
    );
    newState.products = filteredList;
  }

  if (action.type === ADD_PRODUCT) {
    newState.products.push(action.payload.productAdded);
  }

  if (action.type === CREATE_SHOP) {
    newState.userShops.push(action.payload.createdShop);
    newState.shops.push(action.payload.createdShop);
  }

  if (action.type === UPDATE_PRODUCT) {
    const filteredList = newState.products.filter(
      (product) => product.productID !== action.payload.updatedProduct.productID
    );
    filteredList.push(action.payload.updatedProduct);
    newState.products = filteredList;
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
