import {
  fetchpending,
  fetchsuccess,
  fetcherror,
} from "./displayActionsCreator";
import axios from "axios";

const fetchApi = () => {
  return (dispatch, getState) => {
    dispatch(fetchpending());
    axios
      .get("http://localhost:4000/user/getrecipes")
      .then((res) => {
        console.log("thunk axios", res.data.showRecipes);
        dispatch(fetchsuccess(res.data.showRecipes));
        console.log("stateafterfetch", getState());
        return res.data.showRecipes;
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetcherror(err));
      });
  };
};

export default fetchApi;
