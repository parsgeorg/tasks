import React from "react";
//import { Alert } from 'reactstrap';
import { login } from "../../session";
import View from "./View";

const isValidUser = ({ userName, password }) =>
  userName === "admin" && password === "123";

const angryDeny = () => {
  //return <Alert color="danger">This is a danger alert — check it out!</Alert>;
  return alert("Пшел вон!");
};

class LoginForm extends React.Component {
  state = {
    userName: "",
    password: ""
  };

  changeUsername = e => this.setState({ userName: e.currentTarget.value });

  changePassword = e => this.setState({ password: e.currentTarget.value });

  submit = ev => {
    ev.preventDefault();
    isValidUser(this.state) ? login() : angryDeny();
  };

  render() {
    const { userName, password } = this.state;
    return (
      <View
        userName={userName}
        password={password}
        changeUsername={this.changeUsername}
        changePassword={this.changePassword}
        submit={this.submit}
      />
    );
  }
}

export default LoginForm;
