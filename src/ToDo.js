import React, { Component } from "react";
import './ToDo.css';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.showForm = this.showForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
  }

  handleRemove() {
    this.props.removeToDo(this.props.id)
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateToDo(this.props.id, this.state.task)
    this.showForm();
  }

  handleCompleted(evt) {
    this.props.handleCompleted(this.props.id);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  showForm() {
    this.setState({isEditing: !this.state.isEditing})
  }

  render() {
    let result;
    if(this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              id="task"
              name="task"
              value={this.state.task} 
              onChange={this.handleChange} />
            <button>Update</button>
          </form>
        </div>
      );
    } else {
        result = (
          <div className="Todo">
              <li
                onClick={this.handleCompleted}
                className={this.props.completed ? 'Todo-task completed' : "Todo-task"}>{this.props.task}
              </li>
              <div className="Todo-buttons">
                <button onClick={this.showForm}><i class="fas fa-pen" /></button>
                <button onClick={this.handleRemove}><i class="fas fa-trash" /></button>
              </div>
          </div>
        );
    }
    return result;
  }
}

export default ToDo;
