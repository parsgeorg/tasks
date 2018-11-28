import React, { Component } from "react";
import { editTask } from "../../services/Tasks";
import { isAuthorized } from "../../session";

class View extends Component {
  constructor(props) {
    super(props);

    this.buff = {
      sortDir: 0, // asc
      sortField: "id",
      fields: {
        id: "num",
        username: "string",
        email: "string",
        text: "string",
        status: "string"
      }
    };

    // state
    this.state = {
      products: [],
      productValue: "",
      isValidText: false,
      isValidStatus: false
    };
  }

  componentDidMount() {
    let products = this.fetchProducts(); // init
    this.setState({ products });
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

  // берем продукты из базы
  fetchProducts = () => {
    let sortField = this.buff.sortField;

    let products = this.props.products;

    if ("text" === this.buff.fields[sortField]) products.sort(this.sortStrings);
    else products.sort(this.sortNumbers);

    return products;
  };

  // метод выполняется, когда кликам на заголовки в таблице
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

  showError = ev => (ev.target.style.border = "3px solid red");

  saveChanges = (ev, id) => {
    const { value, name } = ev.target;

    if (this.state.productValue !== value) {
      editTask({
        id,
        [name]: value
      });
    }
  };

  onFocus = e => {
    this.setState({ productValue: e.target.value });
  };
  //}

  // функция отрисовки одной строки
  renderItem = item => {
    return (
      <tr className="table-secondary" key={item.id}>
        <td numeric>{item.username}</td>
        <td numeric>{item.email}</td>
        {isAuthorized() ? (
          <td numeric>
            <textarea
              name="text"
              className="form-control"
              rows="3"
              defaultValue={item.text}
              onChange={ev => {
                this.checkText(ev);
              }}
              onBlur={ev => this.saveChanges(ev, item.id)}
              onFocus={this.onFocus}
            />
          </td>
        ) : (
          <td numeric>{item.text}</td>
        )}
        <td numeric>
          <img src={item.image_path} alt="" width="100px" />
        </td>

        {isAuthorized() ? (
          <td numeric>
            <select
              className="form-control"
              defaultValue={item.status}
              name="status"
              id="status"
              onChange={ev => this.saveChanges(ev, item.id)}
              onFocus={this.onFocus}
            >
              <option value={0}>Не выполнено</option>
              <option value={10}>Выполнено</option>
            </select>
          </td>
        ) : (
          <td numeric>{item.status === 0 ? "Не выполнено" : "Выполнено"}</td>
        )}
        {isAuthorized() && (
          <td numeric>
            {item.status === 10 ? "Выполнено" : "Ожидает выполнения"}(Изменено
            админом)
          </td>
        )}
      </tr>
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
          <table class="table table-striped">
            <thead>
              <tr className="table-primary">
                <th
                  scope="col"
                  data-field="text"
                  numeric
                  onClick={this.handleThClick}
                >
                  {" "}
                  Имя пользователя {sort.username}
                </th>
                <th
                  scope="col"
                  data-field="text"
                  numeric
                  onClick={this.handleThClick}
                >
                  Email
                </th>
                <th
                  scope="col"
                  data-field="text"
                  numeric
                  onClick={this.handleThClick}
                >
                  {" "}
                  Текст задачи {sort.text}
                </th>
                <th scope="col" numeric>
                  Картинка
                </th>
                <th
                  scope="col"
                  data-field="text"
                  numeric
                  onClick={this.handleThClick}
                >
                  Статус {sort.status}
                </th>
                {isAuthorized() && (
                  <th numeric>Cмс о редактировании админом</th>
                )}
              </tr>
            </thead>
            <tbody className="table-striped">
              {this.props.products.map(item => this.renderItem(item))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default View;
