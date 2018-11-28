import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const authContext = React.createContext(
  localStorage.getItem("isUserAuth")
);
ReactDOM.render(<App />, document.getElementById("root"));
