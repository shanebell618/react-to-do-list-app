import React, { Component } from "react";
import ToDo from './ToDo.js';
import NewToDoForm from './NewToDoForm';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.createToDo = this.createToDo.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.completed = this.completed.bind(this);
  }

  createToDo(todo) {
      this.setState({
          todos: [...this.state.todos, todo]
      });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  }

  update(id, updatedTask) {
    const updatedToDos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return {...todo, task: updatedTask}
      } else {
        return todo;
      }
    });
    this.setState({ todos: updatedToDos });
  }

  completed(id) {
    const updatedToDos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return {...todo, completed: !todo.completed}
      } else {
        return todo;
      }
    });
    this.setState({ todos: updatedToDos });
  }

  render() {
    const todos = this.state.todos.map(todo => {
        return <ToDo 
                  key={todo.id} 
                  id={todo.id} 
                  task={todo.task} 
                  removeToDo = {this.remove} 
                  updateToDo = {this.update} 
                  completed = {todo.completed}
                  handleCompleted = {this.completed}
                />
    });
    return (
        <div>
            <h1>Notes</h1>
            <NewToDoForm createToDo={this.createToDo} />
            <ul>
                {todos}
            </ul>
        </div>
    );
  }
}

export default ToDoList;
