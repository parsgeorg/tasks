import * as bootstrapValidate from "bootstrap-validate";
import $ from "jquery";
import React from "react";
import { withAlert } from "react-alert";
import { addTask, fileUpload, getTasks } from "../../services/Tasks";
import FilteredProducts from "../FilteredProducts";
import Modal from "../UI/Modal";
import "./styles.css";
class Tasks extends React.Component {
  state = {
    products: [],
    currentPage: 1,
    todosPerPage: 2,
    upperPageBound: 3,
    lowerPageBound: 0,
    isPrevBtnActive: "disabled",
    isNextBtnActive: "",
    pageBound: 3,
    username: "",
    email: "",
    text: "",
    image: "",
    isModalShow: false
  };
  componentDidMount() {
    getTasks().then(res => {
      const products = this.state.products.concat(res);
      this.setState({ products });
    });
  }
  componentDidUpdate() {
    $("ul li.active").removeClass("active");
    $("ul li#" + this.state.currentPage).addClass("active");
  }

  handleClick = event => {
    let listid = Number(event.target.id);
    this.setState({
      currentPage: listid
    });
    $("ul li.active").removeClass("active");
    $("ul li#" + listid).addClass("active");
    this.setPrevAndNextBtnClass(listid);
  };
  setPrevAndNextBtnClass(listid) {
    let totalPage = Math.ceil(
      this.state.products.length / this.state.todosPerPage
    );
    this.setState({ isNextBtnActive: "disabled" });
    this.setState({ isPrevBtnActive: "disabled" });
    if (totalPage === listid && totalPage > 1) {
      this.setState({ isPrevBtnActive: "" });
    } else if (listid === 1 && totalPage > 1) {
      this.setState({ isNextBtnActive: "" });
    } else if (totalPage > 1) {
      this.setState({ isNextBtnActive: "" });
      this.setState({ isPrevBtnActive: "" });
    }
  }
  btnIncrementClick = () => {
    this.setState({
      upperPageBound: this.state.upperPageBound + this.state.pageBound
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound + this.state.pageBound
    });
    let listid = this.state.upperPageBound + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  };
  btnDecrementClick = () => {
    this.setState({
      upperPageBound: this.state.upperPageBound - this.state.pageBound
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound - this.state.pageBound
    });
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  };
  btnPrevClick = () => {
    if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
      this.setState({
        upperPageBound: this.state.upperPageBound - this.state.pageBound
      });
      this.setState({
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound
      });
    }
    let listid = this.state.currentPage - 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  };
  btnNextClick = () => {
    if (this.state.currentPage + 1 > this.state.upperPageBound) {
      this.setState({
        upperPageBound: this.state.upperPageBound + this.state.pageBound
      });
      this.setState({
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound
      });
    }
    let listid = this.state.currentPage + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  };

  changeField = ev => {
    ev.preventDefault();

    this.setState({
      [ev.target.name]: ev.target.value
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
      currentPage,
      todosPerPage,
      upperPageBound,
      lowerPageBound,
      isPrevBtnActive,
      isNextBtnActive
    } = this.state;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;

    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTasks = products.slice(indexOfFirstTodo, indexOfLastTodo);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      if (number === 1 && currentPage === 1) {
        return (
          <li key={number} className="active" id={number}>
            <button id={number} onClick={this.handleClick}>
              {" "}
              {number}
            </button>
          </li>
        );
      } else if (number < upperPageBound + 1 && number > lowerPageBound) {
        return (
          <li key={number} id={number}>
            <button id={number} onClick={this.handleClick}>
              {number}
            </button>
          </li>
        );
      }
    });

    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound) {
      pageIncrementBtn = (
        <li className="">
          <button onClick={this.btnIncrementClick}> &hellip; </button>
        </li>
      );
    }
    let pageDecrementBtn = null;
    if (lowerPageBound >= 1) {
      pageDecrementBtn = (
        <li className="">
          <button onClick={this.btnDecrementClick}> &hellip; </button>
        </li>
      );
    }
    let renderPrevBtn = null;
    if (isPrevBtnActive === "disabled") {
      renderPrevBtn = (
        <li className={isPrevBtnActive}>
          <span id="btnPrev"> Prev </span>
        </li>
      );
    } else {
      renderPrevBtn = (
        <li className={isPrevBtnActive}>
          <button id="btnPrev" onClick={this.btnPrevClick}>
            {" "}
            Prev{" "}
          </button>
        </li>
      );
    }
    let renderNextBtn = null;
    if (isNextBtnActive === "disabled") {
      renderNextBtn = (
        <li className={isNextBtnActive}>
          <span id="btnNext"> Next </span>
        </li>
      );
    } else {
      renderNextBtn = (
        <li className={isNextBtnActive}>
          <button id="btnNext" onClick={this.btnNextClick}>
            {" "}
            Next{" "}
          </button>
        </li>
      );
    }

    const modalData = [];
    modalData.push("Новый продукт", "ОК", username, email, text);

    return (
      <div>
        <FilteredProducts products={currentTasks} />
        <ul className="pagination">
          {renderPrevBtn}
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          {renderNextBtn}
        </ul>
        {isModalShow ? (
          <Modal isModalShow={isModalShow}>{modalData}</Modal>
        ) : (
          ""
        )}

        <button
          onClick={this.viewAddedTask}
          type="button"
          className="btn btn-lg btn-success"
          data-toggle="modal"
          data-target="#myModal"
        >
          Предварительный просмотр
        </button>

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
                          "max:30:Your name must not be longer than 30 characters",
                          "digit:true"
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
                  <div className="col-md-2">
                    <input
                      name="accepted"
                      type="checkbox"
                      data-toggle="toggle"
                      data-on="Принято"
                      data-off="Отклонено"
                      data-onstyle="success"
                      data-offstyle="danger"
                    />
                  </div>
                  <div className="col-md-1">
                    <button
                      id="save"
                      onClick={this.addTask}
                      type="button"
                      className="btn btn-lg btn-success"
                    >
                      Добавить таск
                    </button>
                  </div>
                </div>
              </div>
            </form>

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

export default withAlert(Tasks);
