import displayReducer from "./displayReducer";
import recipeReducer from "./recipeReducer";
import { combineReducers } from "redux";

export default combineReducers({
  displayReducer,
  recipeReducer,
});
