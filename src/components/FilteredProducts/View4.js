import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import { editTask } from "../../services/Tasks";
import { isAuthorized } from "../../session";
class RenderData extends React.PureComponent {
  state = {
    productValue: "",
    products: [],
    isValidText: false,
    isValidStatus: false
  };
  render() {
    const { product } = this.props;

    return (
      <TableRow key={product.id}>
        <TableCell numeric>{product.username}</TableCell>
        <TableCell numeric>{product.email}</TableCell>
        {isAuthorized() ? (
          <TableCell numeric>
            <textarea
              name="text"
              className="form-control"
              rows="3"
              defaultValue={product.text}
              onChange={ev => this.checkText(ev)}
              onBlur={this.saveChanges}
              onFocus={this.onFocus}
            />
          </TableCell>
        ) : (
          <TableCell numeric>{product.text}</TableCell>
        )}
        <TableCell numeric>
          <img src={product.image_path} alt="" width="100px" />
        </TableCell>

        {isAuthorized() ? (
          <TableCell numeric>
            <input
              type="text"
              name="status"
              defaultValue={product.status}
              onChange={ev => this.checkStatus(ev)}
              onBlur={e => this.saveChanges(e, product.id)}
              onFocus={this.onFocus}
            />
          </TableCell>
        ) : (
          <TableCell numeric>{product.status}</TableCell>
        )}
        <TableCell numeric>
          {product.status === 10 ? "Выполнена" : "Ожидает выполнения"}
        </TableCell>
      </TableRow>
    );
  }

  checkText = ev => {
    const valField = ev.target.value.trim();

    if (!valField || valField.length > 30)
      this.setState({ isValidText: false });
    else if (valField.length > 1 && valField.length < 30)
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
    const { value, name } = ev.target;
    const { id } = this.props.product;
    const { isValidText, isValidStatus } = this.state;
    if (this.state.productValue !== value) {
      if (isValidText && isValidStatus) {
        editTask({
          id,
          [name]: value
        });
      } else if (!isValidText || !isValidStatus) {
        console.log("");
      }
    }
  };

  onFocus = e => {
    this.setState({ productValue: e.target.value });
  };
}

class View extends React.PureComponent {
  state = {
    products: this.props.products
  };

  render() {
    let data = this.props.products;

    return (
      <div className="tasks">
        <div className="row">
          <h1>Задачник</h1>
        </div>

        <div className="row">
          <Paper>
            <Table id="table_tasks">
              <TableHead>
                <TableRow>
                  <TableCell numeric>Имя пользователя</TableCell>
                  <TableCell numeric>е-mail</TableCell>
                  <TableCell numeric>Текст задачи</TableCell>
                  <TableCell numeric>Картинка</TableCell>
                  <TableCell numeric>Статус</TableCell>
                  <TableCell numeric>Смс о выполнении</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data &&
                  data.map(product => (
                    <RenderData key={product.id} product={product} />
                  ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}

export default View;
