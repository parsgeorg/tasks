import React from "react";
import { getTasks } from "../../services/Tasks";
import { isAuthorized, logout } from "../../session";
import AddTaskForm from "../UI/Forms/Tasks/AddTaskForm";
import Pagination from "../UI/Pagination";

class Tasks extends React.Component {
  state = {
    tasks: []
  };
  componentDidMount() {
    getTasks().then(res => {
      const tasks = this.state.tasks.concat(res);
      this.setState({ tasks });
    });
  }

  addTask = task => {
    const tasks = this.state.tasks.concat(task);
    this.setState({ tasks });
  };

  render() {
    const { tasks } = this.state;

    return (
      <div>
        <div>
          {!isAuthorized() ? (
            <button className="btn btn-lg btn-success">
              <a href="/login">Авторизоваться</a>
            </button>
          ) : (
            <button onClick={logout} className="btn btn-lg btn-success">
              Logout
            </button>
          )}
        </div>
        <Pagination tasks={tasks} />
        <AddTaskForm addTask={this.addTask} />
      </div>
    );
  }
}

export default Tasks;
