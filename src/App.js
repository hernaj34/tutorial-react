import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";
import Todos from "./todos/Todos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
