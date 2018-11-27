//import Paper from "@material-ui/core/Paper";
import Table from "rc-table";
// import Table from "@material-ui/core/Table";
// import TableCell from "@material-ui/core/TableCell";
// import TableRow from "@material-ui/core/TableRow";
import React from "react";
// class RenderData extends React.PureComponent {
//   state = {
//     productValue: "",
//     products: [],
//     isValidText: false,
//     isValidStatus: false
//   };

//   componentDidMount() {
//     getSortedTable();
//   }

//   render() {
//     const { product } = this.props;

//     return (
//       <TableRow key={product.id}>
//         <TableCell numeric>{product.username}</TableCell>
//         <TableCell numeric>{product.email}</TableCell>
//         {isAuthorized() ? (
//           <TableCell numeric>
//             <textarea
//               name="text"
//               className="form-control"
//               rows="3"
//               defaultValue={product.text}
//               onChange={ev => this.checkText(ev)}
//               onBlur={this.saveChanges}
//               onFocus={this.onFocus}
//             />
//           </TableCell>
//         ) : (
//           <TableCell numeric>{product.text}</TableCell>
//         )}
//         <TableCell numeric>
//           <img src={product.image_path} alt="" width="100px" />
//         </TableCell>

//         {isAuthorized() ? (
//           <TableCell numeric>
//             <input
//               type="text"
//               name="status"
//               defaultValue={product.status}
//               onChange={ev => this.checkStatus(ev)}
//               onBlur={e => this.saveChanges(e, product.id)}
//               onFocus={this.onFocus}
//             />
//           </TableCell>
//         ) : (
//           <TableCell numeric>{product.status}</TableCell>
//         )}
//         <TableCell numeric>
//           {product.status === 10 ? "Выполнена" : "Ожидает выполнения"}
//         </TableCell>
//       </TableRow>
//     );
//   }

//   checkText = ev => {
//     const valField = ev.target.value;

//     if (!valField || valField.length > 30)
//       this.setState({ isValidText: false });
//     else this.setState({ isValidText: true });
//   };

//   checkStatus = ev => {
//     const valField = ev.target.value;

//     if (valField !== "0" && valField !== "10")
//       this.setState({ isValidStatus: false });
//     else this.setState({ isValidStatus: true });
//   };

//   showError = ev => (ev.target.style.border = "3px solid red");

//   saveChanges = ev => {
//     const { value, name } = ev.target;
//     const { id } = this.props.product;
//     const { isValidText, isValidStatus } = this.state;
//     if (this.state.productValue !== value) {
//       if (isValidText && isValidStatus) {
//         editTask({
//           id,
//           [name]: value
//         });
//         ev.target.style.border = "3px solid green";
//       } else if (!isValidText || !isValidStatus) {
//         console.log(isValidText);
//         console.log(isValidStatus);
//         this.showError(ev);
//       }
//     }
//   };

//   onFocus = e => {
//     this.setState({ productValue: e.target.value });
//   };
// }

class View extends React.PureComponent {
  state = {
    products: this.props.products
  };

  updateData = config => {
    this.setState(config);
  };

  render() {
    // const data = this.state.products
    //   ? this.state.products
    //   : this.props.products;

    // let data = this.props.products;

    // // sort меняет исходный массив а не возвращает
    // data.sort((a, b) => {
    //   return a.field > b.field;
    // });

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: 100
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        width: 100
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
        width: 200
      },
      {
        title: "Operations",
        dataIndex: "",
        key: "operations",
        render: () => <a href="#">Delete</a>
      }
    ];

    const data = [
      { name: "Jack", age: 28, address: "some where", key: "1" },
      { name: "Rose", age: 36, address: "some where", key: "2" }
    ];

    return (
      <div className="tasks">
        <div className="row">
          <h1>Задачник</h1>
        </div>
        <div className="row">
          {
            // <ReactSort
            //   dataSource={data}
            //   sortOptions={{ sortField: "text", sortDir: "des" }}
            // >
            //   {props => (
            //     <div>
            //       {props.text} - {props.status}
            //     </div>
            //   )}
            // </ReactSort>
            /* <ToolBar
            initialData={this.props.products}
            data={this.props.products}
            update={this.updateData}
          /> */
          }
        </div>
        <div className="row">
          <Table columns={columns} data={data}>
            {/* <TableHead>
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
              </TableBody> */}
          </Table>
        </div>
      </div>
    );
  }
}

export default View;
