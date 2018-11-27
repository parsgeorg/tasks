import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { Component } from "react";
import { isAuthorized } from "../../session";
import { fetchProducts, handleThClick, setSortField } from "../UI/Sorting";

class View extends Component {
  constructor(props) {
    // parent
    super(props);

    // buff

    // init
    //let products = this.fetchProducts();
    let products = fetchProducts(this.props.products);

    // state
    this.state = {
      products
    };
  }
  // fetchProducts = () => {
  //   const products = this.props.products;
  //   console.log(products);
  //   return fetchProducts(products);
  // };
  handleThClick = ev => {
    const products = handleThClick(ev);

    // перерисовываем
    this.setState({
      ...this.state,
      products: products
    });
  };

  // функция отрисовки одной строки
  renderItem = item => {
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
              onBlur={this.saveChanges}
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
              onBlur={e => this.saveChanges(e, item.id)}
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
      // <tr key={item.id}>
      //   <td>{item.id}</td>
      //   <td>{item.username}</td>
      //   <td>{item.email}</td>
      //   <td>{item.text}</td>
      //   <td>{item.status}</td>
      // </tr>
    );
  };

  // отрисовка всего элемента
  render() {
    let sort = setSortField();

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
              <TableBody>{this.props.products.map(this.renderItem)}</TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}

export default View;
