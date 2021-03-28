import {
  SET_AUTHENTICATE,
  SET_ID_TOKEN,
  SET_SHOPS,
  DELETE_SHOP,
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

export const deleteShop = (shopID) => ({
  type: DELETE_SHOP,
  payload: {
    shopID: shopID,
  },
});
