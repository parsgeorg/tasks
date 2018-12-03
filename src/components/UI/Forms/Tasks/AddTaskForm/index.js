import React from "react";
import {
  clearFileField,
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

    isValidImg: false,

    isModalShow: false,
    isShowSuccessMessage: false
  };

  checkUserName = valField => {
    let err =
      validateRequired(valField) ||
      validateAlpabetical(valField) ||
      validateMaxLength(16)(valField);

    if (err) return this.setState({ usernameErr: err });
    return this.setState({ usernameErr: "" });
  };

  checkEmail = valField => {
    let err = validateRequired(valField) || validateEmail(valField);

    if (err) return this.setState({ emailErr: err });
    return this.setState({ emailErr: "" });
  };

  checkText = valField => {
    let err = validateRequired(valField) || validateMaxLength(100)(valField);

    if (err) return this.setState({ textErr: err });
    return this.setState({ textErr: "" });
  };

  checkImg = () => {
    let err = validateImg();

    if (err) return this.setState({ imgErr: err, isValidImg: false });
    return this.setState({ imgErr: "", isModalShow: false, isValidImg: true });
  };

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

    clearFileField();
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
      isValidImg,
      isModalShow,
      isShowSuccessMessage
    } = this.state;

    const modalData = [];
    modalData.push(
      "Новая задача:",
      "ОК",
      `Cоздал:${username}`,
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
          isValidImg={isValidImg}
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
