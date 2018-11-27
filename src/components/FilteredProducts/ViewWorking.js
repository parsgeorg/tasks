import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { Component } from "react";
import { editTask } from "../../services/Tasks";
import { isAuthorized } from "../../session";
class View extends Component {
  constructor(props) {
    // parent
    super(props);

    // buff
    this.buff = {
      sortDir: 0, // asc
      sortField: "id",
      fields: {
        id: "num",
        username: "string",
        email: "string",
        text: "string",
        status: "num"
      }
    };

    // init
    //this.handleThClick();
    let products = this.fetchProducts();

    // state
    this.state = {
      products: products ? products : [], //this.props.products
      productValue: "",
      isValidText: false,
      isValidStatus: false
    };
  }

  sortNumbers = (a, b) => {
    let sortDir = this.buff.sortDir;
    let sortField = this.buff.sortField;

    if (sortDir) {
      return ("" + b[sortField]).localeCompare(a[sortField]);
    } else {
      return ("" + a[sortField]).localeCompare(b[sortField]);
    }
  };

  sortStrings = (a, b) => {
    let sortDir = this.buff.sortDir;
    let sortField = this.buff.sortField;

    if (sortDir) {
      return b[sortField] - a[sortField];
    } else {
      return a[sortField] - b[sortField];
    }
  };

  // тут мы берем продукты из базы
  fetchProducts = () => {
    let sortField = this.buff.sortField;

    let products = this.props.products;

    if ("text" === this.buff.fields[sortField]) products.sort(this.sortStrings);
    else products.sort(this.sortNumbers);

    return products;
  };

  // это выполняется когда кликам на тх в таблице
  handleThClick = ev => {
    let sortField = this.buff.sortField;
    let sortDir = this.buff.sortDir;

    if (ev.currentTarget.dataset.field === sortField) {
      sortDir = !sortDir;
    } else {
      sortField = ev.currentTarget.dataset.field;
      sortDir = !sortDir;
    }

    // запрашиваем продукты заново с новыми сортировками
    this.buff.sortField = sortField;
    this.buff.sortDir = sortDir;
    let products = this.fetchProducts();

    // перерисовываем
    this.setState({
      ...this.state,
      products: products
    });
  };

  checkText = ev => {
    const valField = ev.target.value.trim();

    if (!valField || valField.length > 30)
      this.setState({ isValidText: false });
    else if (valField && valField.length < 30)
      this.setState({ isValidText: true });
  };

  checkStatus = ev => {
    const valField = ev.target.value.trim();

    if (valField !== "0" && valField !== "10")
      this.setState({ isValidStatus: false });
    else if (valField === "0" || valField === "10")
      this.setState({ isValidStatus: true });
  };

  showError = ev => (ev.target.style.border = "3px solid red");

  saveChanges = ev => {
    // console.log(this.state);
    //console.log(this.props.products[0].id);
    //console.log(id);
    console.log(ev.target);
    const { value, name } = ev.target;
    const { id } = this.props.products[0];
    //const { isValidText, isValidStatus } = this.state;
    if (this.state.productValue !== value) {
      // if (isValidText && isValidStatus) {
      //console.log(ev.target);
      // name === "text"
      //   ? ev.target.contains("err")
      //     ? ev.target.classList.remove("err").add("ok")
      //     : ev.target.classList.add("ok")
      //   : name === "status"
      //   ? ev.target.contains("err")
      //     ? ev.target.classList.remove("err").add("ok")
      //     : ev.target.classList.add("ok")
      //   : (ev.target.style.border = "none");
      editTask({
        id,
        [name]: value
      });
      // } else if (!isValidText || !isValidStatus) {
      //   console.log("");
      //   // name === "text"
      //   //   ? ev.target.contains("ok")
      //   //     ? ev.target.classList.remove("ok").add("err")
      //   //     : ev.target.classList.add("err")
      //   //   : name === "status"
      //   //   ? ev.target.contains("ok")
      //   //     ? ev.target.classList.remove("ok").add("err")
      //   //     : ev.target.classList.add("err")
      //   //   : (ev.target.style.border = "none");
      // }
    }
  };

  onFocus = e => {
    this.setState({ productValue: e.target.value });
  };
  //}

  // функция отрисовки одной строки
  renderItem = item => {
    // console.log(this.props.products);
    // console.log(item);
    //console.log(this.state.products);
    return (
      <TableRow key={item.id}>
        <TableCell numeric>{item.username}</TableCell>
        <TableCell numeric>{item.email}</TableCell>
        {isAuthorized() ? (
          <TableCell numeric>
            <textarea
              name="text"
              className="form-control"
              rows="3"
              defaultValue={item.text}
              onChange={ev => this.checkText(ev)}
              onBlur={ev => this.saveChanges(ev)}
              onFocus={this.onFocus}
            />
          </TableCell>
        ) : (
          <TableCell numeric>{item.text}</TableCell>
        )}
        <TableCell numeric>
          <img src={item.image_path} alt="" width="100px" />
        </TableCell>

        {isAuthorized() ? (
          <TableCell numeric>
            <input
              type="text"
              name="status"
              defaultValue={item.status}
              onChange={ev => this.checkStatus(ev)}
              onBlur={ev => this.saveChanges(ev)}
              onFocus={this.onFocus}
            />
          </TableCell>
        ) : (
          <TableCell numeric>{item.status}</TableCell>
        )}
        <TableCell numeric>
          {item.status === 10 ? "Выполнена" : "Ожидает выполнения"}
        </TableCell>
      </TableRow>
    );
  };

  // отрисовка всего элемента
  render() {
    let sort = {
      id: null,
      username: null,
      email: null,
      text: null,
      status: null
    };

    sort[this.buff.sortField] = this.buff.sortDir ? "DESC" : "ASC";

    return (
      <div className="tasks">
        <div className="row">
          <h1>Задачник</h1>
        </div>

        <div className="row">
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    data-field="text"
                    numeric
                    onClick={this.handleThClick}
                  >
                    Имя пользователя {sort.username}
                  </TableCell>
                  <TableCell numeric>E-mail {sort.email}</TableCell>
                  <TableCell
                    data-field="text"
                    numeric
                    onClick={this.handleThClick}
                  >
                    Текст задачи {sort.text}
                  </TableCell>
                  <TableCell numeric>Картинка</TableCell>
                  <TableCell data-field="text" numeric>
                    Статус {sort.status}
                  </TableCell>
                  <TableCell numeric>Смс о выполнении</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.products.map(item => this.renderItem(item))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}

export default View;
