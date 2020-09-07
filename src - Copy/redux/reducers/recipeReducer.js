import { LOGIN, LOGOUT } from "../actions/action-types/recipe-actions";

const initialState = {
  currentUser: {},
  loggedIN: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, currentUser: action.payload, loggedIN: true };
    case LOGOUT:
      localStorage.removeItem("user");
      return { ...state, currentUser: {}, loggedIN: false };
    default:
      return state;
  }
};
