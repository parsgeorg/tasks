import React, { Component } from "react";
import { Button } from "react-bootstrap";
export default class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.sorted = { username: true, email: true, status: true };
  }

  sort(type) {
    // с помощью реструктуризации создаём две переменные
    const { update, data } = this.props;

    // получаем порядок сортировки
    const isSorted = this.sorted[type];
    // устанавливаем направление
    let direction = isSorted ? 1 : -1;

    // создаём новый массив из данных, чтобы не перезаписывать
    // состояние и сортируем его
    const sorted = [].slice.call(data).sort((a, b) => {
      // чтобы сортировка всегда была одинаковой учтём все условия
      // функция может вернуть 0, 1 или -1, в зависимости от возвращаемого
      // значения метод массивов sort сделает свой выбор
      if (a[type] === b[type]) {
        return 0;
      }
      return a[type] > b[type] ? direction : direction * -1;
    });

    // меняем порядок сортировки
    this.sorted[type] = !isSorted;
    
    // обновляем состояние
    update({
      products: sorted,
      active: 0
    });
  }
  reset() {}

  render() {
    return (
      <div className="toolbar">
        <Button
          className="btn btn-success"
          onClick={() => this.sort("username")}
        >
          <i className="fa fa-sort-alpha-asc" /> По имени
        </Button>

        <Button className="btn btn-success" onClick={() => this.sort("email")}>
          <i className="fa fa-sort-numeric-desc" /> По email
        </Button>

        <Button className="btn btn-success" onClick={() => this.sort("status")}>
          <i className="fa fa-sort-numeric-desc" /> По статусу
        </Button>
      </div>
    );
  }
}
