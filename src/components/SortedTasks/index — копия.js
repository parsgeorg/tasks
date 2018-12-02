import React from "react";
import View from "./View";

class FilteredTasks extends React.Component {
  state = {
    tasks: []
  };

  setTasks = tasks => this.setState({ tasks });

  filterTasks = value => {
    value = value.trim();

    if (value === "") return this.setTasks(this.props.tasks);

    const filteredTasks = this.props.tasks.filter(
      task =>
        task.username.indexOf(value) !== -1 ||
        task.email.indexOf(value) !== -1 ||
        task.text.indexOf(value) !== -1
    );

    this.setTask(filteredTasks);
  };

  onEnter = ({ keyCode, currentTarget: { value } }) =>
    keyCode === 13 && this.filteredTasks(value);

  render() {
    return (
      <div>
        <View tasks={this.props.tasks} />
      </div>
    );
  }
}

export default FilteredTasks;
