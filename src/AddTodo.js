import React, { Component } from 'react';

class addTodo extends Component {
  state = {
    content: ''
  }

  handleOnChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label><h6 className="blue-text">Add a new todo:</h6></label>
          <input type="text" onChange={this.handleOnChange} value={this.state.content} autoFocus />
        </form>
      </div>
    )
  }
}

export default addTodo;