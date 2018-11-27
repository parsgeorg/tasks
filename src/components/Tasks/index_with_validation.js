import Button from "@material-ui/core/Button";
import Cropper from "cropperjs";
import React from "react";
import { withAlert } from "react-alert";
import { Form, ValidatedInput } from "react-bootstrap-validation";
import ReactPaginate from "react-paginate";
import { addTask, editTask, fileUpload, getTasks } from "../../services/Tasks";
import FilteredProducts from "../FilteredProducts";
import "./styles.css";

class Tasks extends React.Component {
  state = {
    products: [],
    total_task_count: "5",
    pageCount: 2,
    offset: 0,
    perPage: 3,
    username: "",
    email: "",
    text: "",
    image: ""
  };

  componentDidMount() {
    editTask().then(res => console.log(res));

    // let img = new Image(
    //   "https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836803_4.jpg"
    // );
    //this.manageImg(img);
    // getTasks().then(users => this.setState({
    //   products: JSON.parse(users)
    // })

    getTasks().then(res => {
      const products = this.state.products.concat(res);
      this.setState({ products });
      //console.log(this.state.products);
    });
  }

  manageImg = image => {
    const cropper = new Cropper(image, {
      aspectRatio: 16 / 9,
      crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
      }
    });
    return cropper;
  };

  setProducts = products => this.setState({ products });
  setPageCount = pageCount => this.setState({ pageCount });
  setOffset = offset => this.setState({ offset });

  onProductsReceived = res => {
    this.setPageCount(Math.ceil(res.total / this.state.perPage));
    this.setProducts(res.items);
  };

  getProducts = () => {
    getTasks({ perPage: this.state.perPage, offset: this.state.offset }).then(
      this.onProductsReceived
    );
  };

  onPageChange = data => {
    this.setOffset(Math.ceil(data.selected * this.state.perPage));
    this.getProducts();
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
      console.log(product);
      const products = this.state.products.concat(product);
      this.setState({ products });
    });
  };

  viewAddedTask = () => {
    const { username, email, text } = this.state;
    this.props.alert.show(`Имя - ${username} email - ${email} Текст - ${text}`);
  };

  render() {
    const { username, email, text } = this.state;
    return (
      <div>
        <FilteredProducts products={this.state.products} />
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.onPageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
        {/* <form>
          <input type="text" defaultValue={username} onChange={this.changeField} />
          <input type="text" defaultValue={email} onChange={this.changeField} />
          <input type="text" defaultValue={text} onChange={this.changeField} />

          <Button onClick={this.addTask} variant="contained" color="primary">
            Добавить
          </Button>
        </form> */}

        <Button
          onClick={this.viewAddedTask}
          variant="contained"
          color="primary"
        >
          Предварительный просмотр
        </Button>

        <div id="preview-data" className="panel panel-default">
          <div className="panel-heading" />
          <div className="panel-body" />
          <div id="image-holder" />
        </div>

        <div className="panel panel-default">
          <div className="panel-body">
            <Form
              onSubmit={this.addTask}
              id="feedback"
              encType="multipart/form-data"
              //action="/edit/{{ task.id }}"
              method="post"
              // role="form"
            >
              <div className="form-group">
                <label>Имя</label>
                <ValidatedInput
                  type="text"
                  className="form-control"
                  name="username"
                  defaultValue={username}
                  onChange={this.changeField}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <ValidatedInput
                  type="email"
                  className="form-control"
                  name="email"
                  defaultValue={email}
                  onChange={this.changeField}
                  validate="required,isEmail"
                  // Error messages for each error type
                  // errorHelp={{
                  //   required: "Please enter your email",
                  //   isEmail: "Email is invalid"
                  // }}
                />
              </div>

              <div className="form-group">
                <label>Текст</label>
                <textarea
                  name="text"
                  className="form-control"
                  rows="3"
                  defaultValue={text}
                  onChange={this.changeField}
                  validate="required,isLength:6:60"
                  // errorHelp={{
                  //   required: "Please specify a text",
                  //   isLength: "Text must be at least 6 characters"
                  // }}
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
                    <Button
                      id="save"
                      onClick={this.addTask}
                      variant="contained"
                      color="primary"
                    >
                      Добавить таск
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default withAlert(Tasks);
