import React from "react";
import { isAuthorized, logout } from "../../../session";

const Login = () => (
  <div>
    {!isAuthorized() ? (
      <button className="btn btn-lg btn-success">
        <a href="/login">Авторизоваться</a>
      </button>
    ) : (
      <button onClick={logout} className="btn btn-lg btn-success">
        Выйти
      </button>
    )}
  </div>
);

export default Login;
