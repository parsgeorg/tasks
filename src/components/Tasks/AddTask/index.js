import bootstrapValidate from "bootstrap-validate";
import React from "react";
import Modal from "../../UI/Modal";

class AddTask extends React.Component {
  state = {
    products: this.props.products,
    username: "",
    email: "",
    text: "",
    isModalShow: false,
    isValidName: false,
    isValidEmail: false
  };
  checkUserName = valField => {
    if (!valField || valField.length > 30)
      this.setState({ isValidName: false });
    else this.setState({ isValidName: true });
  };

  checkEmail = valField => {
    const r = /^\w+@\w+\.\w{2,4}$/i;
    if (!valField || !r.test(valField)) this.setState({ isValidEmail: false });
    else this.setState({ isValidEmail: true });
  };

  changeField = ev => {
    ev.preventDefault();
    const nameField = ev.target.name;
    const valField = ev.target.value;

    if (nameField === "username") this.checkUserName(valField);
    if (nameField === "email") this.checkEmail(valField);
    this.setState({
      [ev.target.name]: ev.target.value,
      isModalShow: false
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
      isValidName,
      isValidEmail,
      isModalShow
    } = this.state;

    const modalData = [];
    modalData.push("Новая задача:", "ОК", username, email, text);

    return (
      <div>
        {isModalShow ? (
          <Modal isModalShow={isModalShow}>{modalData}</Modal>
        ) : (
          ""
        )}
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
                          "max:30:Your name must not be longer than 30 characters"
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
                          "email:Enter a valid E-Mail Address!"
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
                  name="text"
                  className="form-control"
                  rows="3"
                  defaultValue={text}
                  onChange={this.changeField}
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
              //onClick={this.addTask}
              type="button"
              className="btn btn-lg btn-success"
              disabled={!isValidName || !isValidEmail}
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
export default AddTask;
