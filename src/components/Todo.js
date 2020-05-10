import React, { Component } from 'react';

export class Todo extends Component {

  handleClick = () => {
    this.props.toggleComplete(this.props.todo.id);
  }

  getStyles = () => {
    return this.props.todo.completed ? 'Todo-item completed' : 'Todo-item';
  }

  getDisplay = () => {
    return this.props.todo.completed && this.props.showCompleted === false ? { display: "none" } : { display: 'flex' };
  }

  handleDelete = () => {
    this.props.deleteTodo(this.props.todo.id);
  }

  render() {
    return (

      <li className={this.getStyles()} style={this.getDisplay()} >
        <span className="clickable" onClick={this.handleClick}>
          <span className="Todo-icon">
            <i className="fas fa-check"></i>
          </span>
          <span className="Todo-content">
            {this.props.todo.content}
          </span>
        </span>
        <span className="Todo-del-icon">
          <i className="far fa-trash-alt" onClick={this.handleDelete}></i>
        </span>
      </li>
    )
  }
}

export default Todo;
