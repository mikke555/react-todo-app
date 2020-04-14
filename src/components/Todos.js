import React, { Component } from 'react';
import Todo from './Todo';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

export class Todos extends Component {

  numUncompleted = () => {
    const num = this.props.todos.filter(todo => todo.completed === false).length;
    if (num > 1) return `You have ${num} left`;
    if (num === 1) return `You have one left`;
    return `You completed all to-dos`;
  }

  render() {
    const footer = {
      textAlign: "right",
      color: "#7190a4",
      background: "#f1f4f6",
      padding: "10px",
      textTransformation: "upperCase",
      fontSize: "13px",
      borderBottomLeftRadius: "6px",
      borderBottomRightRadius: "6px"
    }

    return (
      <div>
        <TransitionGroup component="ul" className="todo-list">
          {
            this.props.todos.map(todo =>
              (<CSSTransition key={todo.id} timeout={550} classNames="todo">
                <Todo todo={todo} key={todo.id} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} />
              </CSSTransition>)
            )
          }
        </TransitionGroup>

        {
          this.props.todos.length > 0 &&
          <footer style={footer}>
            {this.numUncompleted()}
          </footer>
        }
      </div >
    )
  }
}

export default Todos;
