import React, { Component } from "react";
import TodoItem from "./TodoItem";
import maxBy from "lodash/maxBy";

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ id: 1, name: "Todo 1" }, { id: 2, name: "Todo 2" }],
      newTodo: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTodoChange = this.handleTodoChange.bind(this);
  }

  handleClick() {
    if (!this.state.newTodo) {
      return;
    }
    let maxItem = maxBy(this.state.list, "id");
    let newId = maxItem.id + 1;

    let newList = [...this.state.list, { id: newId, name: this.state.newTodo }];
    this.setState({ list: newList, newTodo: "" });
  }

  handleTodoChange(event) {
    this.setState({ ...this.state, newTodo: event.target.value });
  }

  render() {
    let elements = this.state.list.map(function(item) {
      return <TodoItem key={item.id} item={item} />;
    });

    return (
      <div>
        <h1>Todo APP</h1>
        <ul>{elements}</ul>
        <input value={this.state.newTodo} onChange={this.handleTodoChange} />
        <button onClick={this.handleClick}>Add element</button>
      </div>
    );
  }
}
