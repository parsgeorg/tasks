import React from "react";

class View extends React.Component {
  render() {
    const {
      username,
      email,
      text,
      changeField,
      usernameErr,
      emailErr,
      textErr,
      imgErr,
      isValidForm,
      fileUpload,
      viewAddedTask,
      addTask,
      isShowSuccessMessage
    } = this.props;

    return (
      <div>
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
              onSubmit={addTask}
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
                      className={`form-control ${usernameErr && "errField"}`}
                      name="username"
                      value={username}
                      required="required"
                      pattern="[A-Za-z]{6,}"
                      onChange={ev => changeField(ev)}
                    />
                  </div>
                  {usernameErr && <div className="err">{usernameErr}</div>}
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
                      className={`form-control ${emailErr && "errField"}`}
                      name="email"
                      value={email}
                      required="required"
                      onChange={ev => changeField(ev)}
                    />
                  </div>
                  {emailErr && <div className="err">{emailErr}</div>}
                </div>
              </div>

              <div className="form-group">
                <label>Текст</label>
                <textarea
                  id="text"
                  name="text"
                  className={`form-control ${textErr && "errField"}`}
                  rows="3"
                  value={text}
                  onChange={ev => changeField(ev)}
                />
              </div>
              {textErr && <div className="err">{textErr}</div>}
              <div className="form-group">
                <input
                  id="fileUpload"
                  type="file"
                  className={`form-control ${imgErr && "errField"}`}
                  name="fupload"
                  multiple="multiple"
                  onChange={fileUpload}
                />
              </div>
              {imgErr && <div className="err">{imgErr}</div>}
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-5">
                    <a href="/">Отмена</a>
                  </div>
                  {username || email || text ? (
                    <div className="col-md-1">
                      <button
                        onClick={viewAddedTask}
                        type="button"
                        className="btn btn-lg btn-success"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Превью
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </form>

            <button
              id="save"
              onClick={this.props.addTask}
              type="button"
              className="btn btn-lg btn-success"
              disabled={
                !isValidForm || usernameErr || emailErr || textErr || imgErr
              }
            >
              Добавить таск
            </button>

            {isShowSuccessMessage && (
              <div className="alert alert-success alert-dismissible fade show successedAddedTaskMessage">
                <button type="button" className="close" data-dismiss="alert">
                  &times;
                </button>
                <strong>Новая задача успешно добавлена!</strong>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default View;
