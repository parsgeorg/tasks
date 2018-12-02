import React, { Component, Fragment } from "react";
import { isAuthorized } from "../../session";
import { setSortDirection } from "../Sorting";

class View extends Component {
  // функция отрисовки одной строки
  renderItem = item => {
    const { onFocus, checkText, saveChanges } = this.props;
    return (
      <Fragment>
        <tr className="table-secondary" key={item.id}>
          <td>{item.username}</td>
          <td>{item.email}</td>
          {isAuthorized() ? (
            <td>
              <textarea
                name="text"
                className={`form-control `} //${textErr && "errField"}
                rows="3"
                defaultValue={item.text}
                onChange={ev => {
                  checkText(ev);
                }}
                onBlur={ev => saveChanges(ev, item.id)}
                onFocus={onFocus}
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
                onChange={ev => saveChanges(ev, item.id)}
                onFocus={onFocus}
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
      </Fragment>
    );
  };

  // отрисовка всего элемента
  render() {
    const { handleThClick } = this.props;
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
                <th scope="col" data-field="text" onClick={handleThClick}>
                  {" "}
                  Имя пользователя {sort.username}
                </th>
                <th scope="col" data-field="text" onClick={handleThClick}>
                  Email
                </th>
                <th scope="col" data-field="text" onClick={handleThClick}>
                  {" "}
                  Текст задачи {sort.text}
                </th>
                <th scope="col">Картинка</th>
                <th scope="col" data-field="text" onClick={handleThClick}>
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
