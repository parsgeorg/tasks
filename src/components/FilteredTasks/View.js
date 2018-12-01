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
      tasks: [],
      productValue: "",
      isValidText: false,
      isValidStatus: false
    };
  }

  componentDidMount() {
    let tasks = this.fetchTasks(); // init
    this.setState({ tasks });
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
  fetchTasks = () => {
    let sortField = this.buff.sortField;

    let tasks = this.props.tasks;

    if ("text" === this.buff.fields[sortField]) tasks.sort(this.sortStrings);
    else tasks.sort(this.sortNumbers);

    return tasks;
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
    let tasks = this.fetchTasks();

    // перерисовываем
    this.setState({
      ...this.state,
      tasks
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
        <td>{item.username}</td>
        <td>{item.email}</td>
        {isAuthorized() ? (
          <td>
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
          <td>{item.text}</td>
        )}
        <td>
          <img src={item.image_path} alt="" width="100px" />
        </td>

        {isAuthorized() ? (
          <td>
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
          <td>{item.status === 0 ? "Не выполнено" : "Выполнено"}</td>
        )}
        {isAuthorized() && (
          <td>
            {item.status === 10 ? "Выполнено" : "Ожидает выполнения"}(Изменено
            админом)
          </td>
        )}
      </tr>
    );
  };

  // отрисовка всего элемента
  render() {
    console.log(this.props);
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
          <table className="table table-striped">
            <thead>
              <tr className="table-primary">
                <th scope="col" data-field="text" onClick={this.handleThClick}>
                  {" "}
                  Имя пользователя {sort.username}
                </th>
                <th scope="col" data-field="text" onClick={this.handleThClick}>
                  Email
                </th>
                <th scope="col" data-field="text" onClick={this.handleThClick}>
                  {" "}
                  Текст задачи {sort.text}
                </th>
                <th scope="col">Картинка</th>
                <th scope="col" data-field="text" onClick={this.handleThClick}>
                  Статус {sort.status}
                </th>
                {isAuthorized() && <th>Cмс о редактировании админом</th>}
              </tr>
            </thead>
            <tbody className="table-striped">
              {this.props.tasks.map(item => this.renderItem(item))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default View;
