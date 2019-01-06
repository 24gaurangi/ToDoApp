import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos : [
      { id: 1, content:"Do homework"},
      { id: 2, content:"Do homework"},
      { id: 3, content:"Do laundry"}
    ]
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState(
      {
        todos
      })
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState(
      {
        todos
      })
  }
  render() {
    return (
      <div className="App container">
        <h1 className='center green-text'> ToDo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}></AddTodo>
      </div>
    );
  }
}

export default App;
