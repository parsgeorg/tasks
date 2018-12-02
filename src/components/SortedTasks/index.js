import React from "react";
import { validateMaxLength, validateRequired } from "../../helpers/Validation";
import { editTask } from "../../services/Tasks";
import { buff, sortNumbers, sortStrings } from "../Sorting";
import View from "./View";

class SortedTasks extends React.Component {
  state = {
    tasks: [],
    taskValue: "",
    textErr: ""
  };

  componentDidMount() {
    let tasks = this.fetchTasks();
    this.setState({ tasks });
  }

  fetchTasks = () => {
    let sortField = buff.sortField;

    let tasks = this.props.tasks;

    if ("text" === buff.fields[sortField]) tasks.sort(sortStrings);
    else tasks.sort(sortNumbers);

    return tasks;
  };

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
    const valField = ev.target.value;
    let err = validateRequired(valField) || validateMaxLength(10)(valField);

    if (err) return this.setState({ textErr: err });
    return this.setState({ textErr: "" });
  };

  saveChanges = (ev, id) => {
    const { value, name } = ev.target;

    if (this.state.taskValue !== value && !this.state.textErr) {
      editTask({
        id,
        [name]: value
      });
    }
  };

  onFocus = e => {
    this.setState({ taskValue: e.target.value });
  };

  render() {
    const { onFocus, checkText, saveChanges, handleThClick } = this;
    const tasks = this.props.tasks;
    const textErr = this.state;

    return (
      <div>
        <View
          tasks={tasks}
          onFocus={onFocus}
          checkText={checkText}
          textErr={textErr}
          saveChanges={saveChanges}
          handleThClick={handleThClick}
        />
      </div>
    );
  }
}

export default SortedTasks;
