import { SET_AUTHENTICATE } from "./actionTypes";

const { createStore } = require("redux");

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

export default createStore(myReducer);
