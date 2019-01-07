import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    content : ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (e) => {
      e.preventDefault()
      this.props.addTodo(this.state)
      this.setState({
        content:''
      })
    }

  render(){

    return(
      <div className="container left ">
        <form onSubmit={this.handleSubmit}>
          <label className="blue-text"><h5>Add new Task</h5></label>
          <input type="text" id="task" onChange={this.handleChange} value={this.state.content}></input>
        </form>
      </div>
    )
  }
}

export default AddTodo
