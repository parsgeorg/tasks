import React from "react";

const View = props => (
  <form onSubmit={props.submit}>
    <div class="container login">
      <div class="row">
        <div class="col-sm">
          <label>Логин</label>
          <input
            type="text"
            name="userName"
            placeholder="userName"
            onChange={props.changeUsername}
            value={props.userName}
          />
        </div>
        <div class="col-sm">
          <label>Пароль</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={props.changePassword}
            value={props.password}
          />
        </div>
        <div class="col-sm">
          <button className="btn btn-lg btn-success">Авторизоваться</button>
        </div>
      </div>
    </div>
  </form>
);

export default View;
