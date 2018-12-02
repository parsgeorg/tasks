import React from "react";
import { validateMaxLength, validateRequired } from "../../helpers/Validation";
import { editTask } from "../../services/Tasks";
import { buff, sortNumbers, sortStrings } from "../Sorting";
import View from "./View";

class FilteredTasks extends React.Component {
  state = {
    tasks: [],
    productValue: "",
    textErr: ""
  };

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
    const valField = ev.target.value;
    let err = validateRequired(valField) || validateMaxLength(10)(valField);

    if (err) return this.setState({ textErr: err });
    return this.setState({ textErr: "" });
  };

  showError = ev => (ev.target.style.border = "3px solid red");

  saveChanges = (ev, id) => {
    const { value, name } = ev.target;

    if (this.state.productValue !== value && !this.state.textErr) {
      editTask({
        id,
        [name]: value
      });
    }
  };

  onFocus = e => {
    this.setState({ productValue: e.target.value });
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

export default FilteredTasks;
