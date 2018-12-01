import React from "react";

const Message = props => (
  <div className="alert alert-success alert-dismissible fade show successedAddedTaskMessage">
    <button type="button" className="close" data-dismiss="alert">
      &times;
    </button>
    <strong>{props.text}</strong>
  </div>
);
export default Message;
