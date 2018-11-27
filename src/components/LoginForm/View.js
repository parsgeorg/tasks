import React from "react";

const View = props => (
  <form onSubmit={props.submit}>
    <div className="row">
      <div className="medium-5 columns left">
        <label>Username</label>
        <input
          type="text"
          name="userName"
          placeholder="userName"
          onChange={props.changeUsername}
          value={props.userName}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={props.changePassword}
          value={props.password}
        />
        <button className="btn btn-lg btn-success">Login</button>
      </div>
    </div>
  </form>
);

export default View;
