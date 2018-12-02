import React, { Component } from "react";
import { editTask } from "../../services/Tasks";
import { isAuthorized } from "../../session";
import { buff, setSortDirection, sortNumbers, sortStrings } from "../Sorting";

class View extends Component {
  constructor(props) {
    super(props);

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

  fetchTasks = () => {
    let sortField = buff.sortField;

    let tasks = this.props.tasks;

    if ("text" === buff.fields[sortField]) tasks.sort(sortStrings);
    else tasks.sort(sortNumbers);

    return tasks;
  };

  // метод выполняется, когда кликам на заголовки в таблице
  handleThClick = ev => {
    let sortField = buff.sortField;
    let sortDir = buff.sortDir;

    if (ev.currentTarget.dataset.field === sortField) {
      sortDir = !sortDir;
    } else {
      sortField = ev.currentTarget.dataset.field;
      sortDir = !sortDir;
    }

    // запрашиваем продукты заново с новыми сортировками
    buff.sortField = sortField;
    buff.sortDir = sortDir;
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
    const sort = setSortDirection();
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
