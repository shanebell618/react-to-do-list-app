import React, { Component } from "react";
import ToDo from './ToDo.js';
import NewToDoForm from './NewToDoForm';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [{ task: "task 1" }, { task: "task 2" }] };
    this.createToDo = this.createToDo.bind(this);
  }

  createToDo(todo) {
      this.setState({
          todos: [...this.state.todos, todo]
      });
  }

  render() {
    const todos = this.state.todos.map(todo => {
        return <ToDo task={todo.task} />
    });
    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {todos}
            </ul>
            <NewToDoForm createToDo={this.createToDo} />
        </div>
    );
  }
}

export default ToDoList;
