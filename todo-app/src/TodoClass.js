import React from "react";
import './style.css';

class TodoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "", 
      tasksList: [] 
    };
  }

  onChange = (e) => {
    this.setState({ task: e.target.value });
  };

  onAddTask = () => {
    if (this.state.task !== "") {
      const task = {
        // usedful for identifying each task uniquely.
        // Add a random id which is used to delete 
        id: Math.random(),
        value: this.state.task
      };
      // Update tasksList
      const tasksList = [...this.state.tasksList];
      tasksList.push(task);

      // Reset state
      this.setState({
        tasksList,
        task: "", // Clear the input field
      });
    }
  };

  // Function to delete item from tasksList use id to delete
  deleteItem(id) {
    const tasksList = [...this.state.tasksList];
    // filter the values and leave that value which will delete in future
    const updatedList = tasksList.filter((item) => item.id !== id);
    this.setState({
      tasksList: updatedList,
    });
  };

  // Edit item
  editItem = (id) => {
    const todos = [...this.state.tasksList];
    const editedTodo = prompt('Edit the todo:');
    if (editedTodo !== null && editedTodo.trim() !== '') {
      let updatedTodos = [...todos];
      const index = updatedTodos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        updatedTodos[index].value = editedTodo;
        this.setState({
          tasksList: updatedTodos,
        });
      }
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

export default TodoClass;
