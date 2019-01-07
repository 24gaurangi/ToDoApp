import React, { Component } from 'react';

class SideBar extends Component {
state = {
  todos : [
    { id: 1, content:"Do homework"},
    { id: 2, content:"Do homework"},
    { id: 3, content:"Do laundry"}
  ]
}
render(){
  const todoList = this.state.todos.length ? (this.state.todos.map(todo => {
    return(
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
        </div>
    )
  })) : (<p className=" center">You have no items left! </p>)

  return(
      <div className="todos collection with-header">
        <div className="collection-header blue-text"><h5>History</h5></div>
        {todoList}
      </div>
  )
}
}
export default SideBar
