import React, { Component } from "react";
import uuid from 'uuid/v4';
import './NewTodoForm.css';

class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {task: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createToDo({...this.state, id: uuid(), completed: false});
    this.setState({ task: "" });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">Add ToDo: </label>
        <input 
          id="task" 
          name="task" 
          type="text" 
          placeholder="New ToDo" 
          value={this.state.task} 
          onChange={this.handleChange} 
        />
        <button>Add ToDo</button>
      </form>
    );
  }
}

export default NewToDoForm;
