import React, { Component } from 'react'

export class AddForm extends Component {
  state = {
    input: ''
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.input !== "") {
      this.props.addTodo(this.state.input.trim())
      this.setState({ input: '' });
    }
  }

  render() {
    return (
      <div>
        <form className="AddForm" onSubmit={this.handleSubmit}>
          <div className="form-control">
            <input placeholder="add a new to-do..." value={this.state.input} onChange={this.handleChange} />
            <i className="fas fa-plus"></i>
            {/* <span>{this.props.numTodos} todos</span> */}
          </div>
        </form>
      </div>
    )
  }
}

export default AddForm
