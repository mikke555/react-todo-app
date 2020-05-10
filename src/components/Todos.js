import React, { Component } from 'react';
import Todo from './Todo';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';


export class Todos extends Component {
  render() {
    return (
      <div>
        <TransitionGroup component="ul" className="todo-list">
          {
            this.props.todos.map(todo =>
              (<CSSTransition key={todo.id} timeout={550} classNames="todo">
                <Todo
                  todo={todo}
                  key={todo.id}
                  toggleComplete={this.props.toggleComplete}
                  deleteTodo={this.props.deleteTodo}
                  showCompleted={this.props.showCompleted}
                />
              </CSSTransition>)
            )
          }
        </TransitionGroup>
      </div >
    )
  }
}

export default Todos;
