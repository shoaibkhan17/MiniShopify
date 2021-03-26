import { SET_AUTHENTICATE, SET_ID_TOKEN } from "./actionTypes";

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
