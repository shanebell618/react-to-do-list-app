import React, { Component } from "react";
import ToDo from './ToDo.js';
import NewToDoForm from './NewToDoForm';
import './ToDoList.css';

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
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return (
        <div className="TodoList">
            <h1>My ToDos <span>{today}</span></h1>
            
            <ul>
                {todos}
            </ul>
            <NewToDoForm createToDo={this.createToDo} />
        </div>
    );
  }
}

export default ToDoList;
