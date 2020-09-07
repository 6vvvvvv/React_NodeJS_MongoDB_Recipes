import { LOGIN, LOGOUT } from "./action-types/recipe-actions";

export const loginUser = (userinfo) => ({
  type: LOGIN,
  payload: userinfo,
});

export const logoutUser = () => ({
  type: LOGOUT,
});
