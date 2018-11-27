import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//import "jquery/dist/jquery.js";
//import "./jquery.tablesorter.pager.js";
//import Popper from 'popper.js';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import "./js/jquery.js";
// import "./js/jquery.tablesorter.js";

// надо в руте создать контекст который будет хранить стейт авторизации
// инишиал стейт он будет брать с локал сторейджа
// дальше у тебя должны быть логин и логаут которые меняют стейт и так же меняют велью в локалсторейдже
export const authContext = React.createContext(
  localStorage.getItem("isUserAuth")
);
ReactDOM.render(<App />, document.getElementById("root"));
