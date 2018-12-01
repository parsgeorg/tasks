import React from "react";
import { login } from "../../session";
import Message from "../UI/Messages";
import View from "./View";

const isValidUser = ({ userName, password }) =>
  userName === "admin" && password === "123";

//const angryDeny = () => <Message text="Пшел нах!" />;

class LoginForm extends React.Component {
  state = {
    userName: "",
    password: "",
    showMessage: false
  };

  changeUsername = e => this.setState({ userName: e.currentTarget.value });

  changePassword = e => this.setState({ password: e.currentTarget.value });

  submit = ev => {
    ev.preventDefault();
    isValidUser(this.state) ? login() : this.setState({ showMessage: true });
  };

  render() {
    const { userName, password, showMessage } = this.state;
    const message = "Логин или пароль не верны!";
    return (
      <div>
        {showMessage && <Message text={message} />}
        <View
          userName={userName}
          password={password}
          changeUsername={this.changeUsername}
          changePassword={this.changePassword}
          submit={this.submit}
        />
      </div>
    );
  }
}

export default LoginForm;
