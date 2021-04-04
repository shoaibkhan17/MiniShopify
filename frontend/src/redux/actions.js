import {
  SET_AUTHENTICATE,
  SET_ID_TOKEN,
  SET_SHOPS,
  DELETE_SHOP,
  SET_USER_SHOPS,
  UPDATE_SHOP,
  SET_PRODUCTS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  CREATE_SHOP,
} from "./actionTypes";

export const setAuthenticated = (flag) => ({
  type: SET_AUTHENTICATE,
  payload: {
    isAuthenticated: flag,
  },
});

export const setIdToken = (idToken) => ({
  type: SET_ID_TOKEN,
  payload: {
    idToken: idToken,
  },
});

export const setShops = (shops) => ({
  type: SET_SHOPS,
  payload: {
    shops: shops,
  },
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: {
    products: products,
  },
});

export const deleteShop = (shopID) => ({
  type: DELETE_SHOP,
  payload: {
    shopID: shopID,
  },
});

export const deleteProduct = (productID) => ({
  type: DELETE_PRODUCT,
  payload: {
    productID: productID,
  },
});

export const updateShop = (updatedShop) => ({
  type: UPDATE_SHOP,
  payload: {
    updatedShop: updatedShop,
  },
});

export const addProduct = (productAdded) => ({
  type: ADD_PRODUCT,
  payload: {
    productAdded: productAdded,
  },
});

export const createShop = (createdShop) => ({
  type: CREATE_SHOP,
  payload: {
    createdShop: createdShop,
  },
});

export const updateProduct = (updatedProduct) => ({
  type: UPDATE_PRODUCT,
  payload: {
    updatedProduct: updatedProduct,
  },
});

export const setUserShops = (userShops) => ({
  type: SET_USER_SHOPS,
  payload: {
    userShops: userShops,
  },
});
