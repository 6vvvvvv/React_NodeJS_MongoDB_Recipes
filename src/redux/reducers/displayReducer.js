import {
  FETCHPENDING,
  FETCHSUCCESS,
  FETCHERROR,
} from "../actions/action-types/display-actions";

const initialState = {
  pending: true,
  recipes: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHPENDING:
      return { ...state, pending: true };

    case FETCHSUCCESS:
      return { ...state, pending: false, recipes: action.payload };

    case FETCHERROR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export const getPending = (state) => state.displayReducer.pending;
export const getRecipes = (state) => state.displayReducer.recipes;
export const getError = (state) => state.displayReducer.error;
