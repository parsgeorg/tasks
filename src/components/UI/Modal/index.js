import React, { PureComponent } from "react";
import "./Modal.css";

export default class Modal extends PureComponent {
  state = {
    isModalShow: this.props.isModalShow
  };

  componentWillReceiveProps() {
    this.setState({ isModalShow: true });
  }
  closeModal = () => {
    this.setState({ isModalShow: false });
  };

  render() {
    const { isModalShow } = this.state;
    let modal = (
      <div className="modalDialog">
        <div>
          <button className="close" onClick={this.closeModal}>
            X
          </button>
          <h2>{this.props.children[0]}</h2>
          <p>{this.props.children[2]}</p>
          <p>{this.props.children[3]}</p>
          <p>{this.props.children[4]}</p>
          <button className="btn btn-success" onClick={this.closeModal}>
            {this.props.children[1]}
          </button>
        </div>
      </div>
    );
    return <div>{isModalShow ? modal : ""}</div>;
  }
}
