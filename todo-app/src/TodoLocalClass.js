import React from "react";
import './style.css';

class TodoLocalClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      tasksList: [],
    };
  }

  componentDidMount() {
    // Use a unique key for localStorage
    const savedTasks = JSON.parse(localStorage.getItem("tasksListClass"));
    if (savedTasks) {
      this.setState({ tasksList: savedTasks });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Save tasks to localStorage when it changes
    if (prevState.tasksList !== this.state.tasksList) {
      localStorage.setItem("tasksListClass", JSON.stringify(this.state.tasksList));
    }
  }

  onChange = (e) => {
    this.setState({ task: e.target.value });
  };

  onAddTask = () => {
    if (this.state.task !== "") {
      const newTask = {
        id: Math.random(),
        value: this.state.task,
      };

      const tasksList = [...this.state.tasksList, newTask];
      this.setState({
        tasksList,
        task: "",
      });
    }
  };

  deleteItem = (id) => {
    const updatedList = this.state.tasksList.filter((item) => item.id !== id);
    this.setState({
      tasksList: updatedList,
    });
  };

  editItem = (id) => {
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      const updatedTodos = this.state.tasksList.map((todo) =>
        todo.id === id ? { ...todo, value: editedTodo } : todo
      );
      this.setState({
        tasksList: updatedTodos,
      });
    }
  };

  render() {
    const list = this.state.tasksList.map((todo) => (
      <ul key={todo.id}>
        <li>{todo.value}</li>
        <button onClick={() => this.deleteItem(todo.id)}>Delete</button>
        <button onClick={() => this.editItem(todo.id)}>Edit</button>
      </ul>
    ));

    return (
      <>
        <input
          type="text"
          onChange={this.onChange}
          value={this.state.task}
        />
        <button onClick={this.onAddTask}>Add Task</button>
        {list}
      </>
    );
  }
}

export default TodoLocalClass;
