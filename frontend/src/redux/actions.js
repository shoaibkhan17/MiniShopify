import { SET_AUTHENTICATE } from "./actionTypes";

export const setAuthenticated = (flag) => ({
  type: SET_AUTHENTICATE,
  payload: {
    isAuthenticated: flag,
  },
});
