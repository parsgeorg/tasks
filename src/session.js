import { history } from "./history";

const LS_AUTH_KEY = "isUserAuth";

const isAuthorized = () => {
  return localStorage.getItem(LS_AUTH_KEY) !== null;
};

const login = () => {
  localStorage.setItem(LS_AUTH_KEY, "yes");
  history.push("/tasks");
};

const logout = () => {
  localStorage.removeItem(LS_AUTH_KEY);
  history.push("/login");
};

export { isAuthorized, login, logout };
