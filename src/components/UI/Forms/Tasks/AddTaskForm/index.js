import React from "react";
import {
  validateAlpabetical,
  validateEmail,
  validateImg,
  validateMaxLength,
  validateRequired
} from "../../../../../helpers/Validation";
import { addTask, fileUpload } from "../../../../../services/Tasks";
import Modal from "../../../Modal";
import View from "./View";
class AddTaskForm extends React.Component {
  state = {
    username: "",
    email: "",
    text: "",

    usernameErr: "",
    emailErr: "",
    textErr: "",
    imgErr: "",

    isValidForm: false,

    isModalShow: false,
    isShowSuccessMessage: false
  };

  checkUserName = valField => {
    let err =
      validateRequired(valField) ||
      validateAlpabetical(valField) ||
      validateMaxLength(16)(valField);

    if (err) return this.setState({ usernameErr: err, isValidForm: false });
    return this.setState({ usernameErr: "", isValidForm: true });
  };

  checkEmail = valField => {
    let err = validateRequired(valField) || validateEmail(valField);

    if (err) return this.setState({ emailErr: err, isValidForm: false });
    return this.setState({ emailErr: "", isValidForm: true });
  };

  checkText = valField => {
    let err = validateRequired(valField) || validateMaxLength(100)(valField);

    if (err) return this.setState({ textErr: err, isValidForm: false });
    return this.setState({ textErr: "", isValidForm: true });
  };

  checkImg = () => {
    let err = validateImg();
    console.log(err);
    if (err) return this.setState({ imgErr: err, isValidForm: false });
    return this.setState({ imgErr: "", isModalShow: false, isValidForm: true });
  };

  // checkValidForm = () => {
  //   if ( this.state.username && this.state.email && this.state.text && this.state.img &&
  //     !( this.state.usernameErr || this.state.emailErr || this.state.textErr || this.state.imgErr )
  //   ) {
  //     return this.setState({ isValidForm: true });
  //   }
  //   this.setState({ isValidForm: false });
  // };

  changeField = ev => {
    ev.preventDefault();
    const nameField = ev.target.name;
    const valField = ev.target.value;

    if (nameField === "username") this.checkUserName(valField);
    if (nameField === "email") this.checkEmail(valField);
    if (nameField === "text") this.checkText(valField);

    this.setState({
      [ev.target.name]: ev.target.value,
      isModalShow: false
    });
  };

  fileUpload = () => {
    fileUpload();
    // const img = document.getElementById("fileUpload").files[0];
    // this.checkImg(img);
    this.checkImg();
  };

  addTask = ev => {
    ev.preventDefault();
    const { username, email, text } = this.state;

    const task = {
      username,
      email,
      text
    };
    addTask(task).then(task => {
      this.props.addTask(task);

      this.setState({
        isModalShow: false,
        isShowSuccessMessage: true,
        username: "",
        email: "",
        text: ""
      });
    });
    document.getElementById("image-holder").innerHTML = "";
    document.getElementById("save").disabled = true;
  };

  viewAddedTask = () => {
    this.setState({ isModalShow: true });
  };

  render() {
    const { changeField, fileUpload, viewAddedTask, addTask } = this;
    const {
      username,
      email,
      text,
      usernameErr,
      emailErr,
      textErr,
      imgErr,
      isValidForm,
      isModalShow,
      isShowSuccessMessage
    } = this.state;

    const modalData = [];
    modalData.push(
      "Новая задача:",
      "ОК",
      `Пользоватеь:${username}`,
      `Email:${email}`,
      `Текст:${text.substr(0, 35)}`
    );

    return (
      <div>
        {isModalShow ? (
          <Modal isModalShow={isModalShow}>{modalData}</Modal>
        ) : (
          ""
        )}
        <View
          username={username}
          email={email}
          text={text}
          changeField={changeField}
          usernameErr={usernameErr}
          emailErr={emailErr}
          textErr={textErr}
          imgErr={imgErr}
          isValidForm={isValidForm}
          fileUpload={fileUpload}
          isModalShow={isModalShow}
          modalData={modalData}
          viewAddedTask={viewAddedTask}
          addTask={addTask}
          isShowSuccessMessage={isShowSuccessMessage}
        />
      </div>
    );
  }
}

export default AddTaskForm;
