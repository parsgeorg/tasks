import * as bootstrapValidate from "bootstrap-validate";
import React from "react";
import { addTask, fileUpload, getTasks } from "../../services/Tasks";
import { isAuthorized, logout } from "../../session";
import Modal from "../UI/Modal";
import Pagination from "../UI/Pagination";
//import "./styles.css";

class Tasks extends React.Component {
  state = {
    products: [],
    username: "",
    email: "",
    text: "",
    // image: "",
    // currentPage: 1,
    // todosPerPage: 2,
    isModalShow: false,
    isValidName: false,
    isValidEmail: false
  };
  componentDidMount() {
    getTasks().then(res => {
      const products = this.state.products.concat(res);
      this.setState({ products });
    });
  }

  checkUserName = valField => {
    const alfa = new RegExp(/^[a-z]+$/i).test(valField);

    if (!valField || !alfa || valField.length > 30)
      this.setState({ isValidName: false });
    else this.setState({ isValidName: true });
  };

  checkEmail = valField => {
    const email = /^\w+@\w+\.\w{2,4}$/i;
    if (!valField || !email.test(valField))
      this.setState({ isValidEmail: false });
    else this.setState({ isValidEmail: true });
  };

  checkText = valField => {
    if (valField.length > 100) this.setState({ isValidText: false });
    else this.setState({ isValidText: true });
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
  };

  addTask = ev => {
    ev.preventDefault();
    const { username, email, text } = this.state;
    const task = {
      username,
      email,
      text
    };
    addTask(task).then(product => {
      const products = this.state.products.concat(product);
      this.setState({ products });
    });
  };

  viewAddedTask = () => {
    this.setState({ isModalShow: true });
  };

  render() {
    const {
      username,
      email,
      text,
      products,
      isModalShow,
      isValidName,
      isValidEmail,
      isValidText
    } = this.state;

    const modalData = [];
    modalData.push("Новая задача:", "ОК", username, email, text.substr(0, 35));

    return (
      <div>
        <div>
          {!isAuthorized() ? (
            <a href="/login" className="button">
              Login
            </a>
          ) : (
            <button onClick={logout} className="btn btn-lg btn-success">
              Logout
            </button>
          )}
        </div>
        <Pagination tasks={products} />

        {isModalShow ? (
          <Modal isModalShow={isModalShow}>{modalData}</Modal>
        ) : (
          ""
        )}
        <div className="row">
          <h2>Форма добавления нового таска.</h2>
        </div>
        <div id="preview-data" className="panel panel-default">
          <div className="panel-heading" />
          <div className="panel-body" />
          <div id="image-holder" />
        </div>

        <div className="panel panel-default">
          <div className="panel-body">
            <form
              onSubmit={this.addTask}
              id="feedback"
              className="form-horizontal"
              encType="multipart/form-data"
              method="post"
            >
              <div className="form-group has-feedback">
                <label htmlFor="username" className="control-label col-xs-3">
                  Имя:
                </label>
                <div className="col-xs-6">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user" />
                    </span>
                    <input
                      id="username"
                      type="text"
                      className="form-control"
                      name="username"
                      defaultValue={username}
                      required="required"
                      pattern="[A-Za-z]{6,}"
                      onChange={ev => {
                        bootstrapValidate(
                          "#username",
                          "required:Поле обязательно к заполнению!"
                        );
                        bootstrapValidate(
                          "#username",
                          "alpha:Только латинские буквы"
                        );
                        bootstrapValidate(
                          "#username",
                          "max:16: Имя не более 16 символов"
                        );
                        this.changeField(ev);
                      }}
                    />
                  </div>
                  <span className="glyphicon form-control-feedback" />
                </div>
              </div>

              <div className="form-group has-feedback">
                <label htmlFor="email" className="control-label col-xs-3">
                  Email:
                </label>
                <div className="col-xs-6">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-envelope" />
                    </span>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      name="email"
                      defaultValue={email}
                      required="required"
                      onChange={ev => {
                        bootstrapValidate(
                          "#email",
                          "email:Введите валидный email!"
                        );
                        this.changeField(ev);
                      }}
                    />
                  </div>
                  <span className="glyphicon form-control-feedback" />
                </div>
              </div>

              <div className="form-group">
                <label>Текст</label>
                <textarea
                  id="text"
                  name="text"
                  className="form-control"
                  rows="3"
                  defaultValue={text}
                  onChange={ev => {
                    bootstrapValidate(
                      "#text",
                      "max:100: Текст не более 100 символов!"
                    );
                    this.changeField(ev);
                  }}
                />
              </div>

              <div className="form-group">
                <input
                  id="fileUpload"
                  type="file"
                  className="form-control"
                  name="fupload"
                  multiple="multiple"
                  onChange={this.fileUpload}
                />
              </div>

              <div className="panel-body">
                <div className="row">
                  <div className="col-md-1">
                    <a href="/">Отмена</a>
                  </div>

                  <div className="col-md-1">
                    <button
                      onClick={this.viewAddedTask}
                      type="button"
                      className="btn btn-lg btn-success"
                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      Превью
                    </button>
                  </div>
                </div>
              </div>
            </form>

            <button
              id="save"
              onClick={this.addTask}
              type="button"
              className="btn btn-lg btn-success"
              disabled={!isValidName || !isValidEmail || !isValidText}
            >
              Добавить таск
            </button>

            <div className="alert alert-success hidden" id="success-alert">
              <h2>Успех</h2>
              <div>Ваши данные были успешно отправлены.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
