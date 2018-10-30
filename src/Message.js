import React, { Component } from "react";
import "./Message.css";

export default class Message extends Component {
  render() {
    return (
      <h1 id="test" className="hello">
        Hola {this.props.name}. Tu mail es {this.props.email}
      </h1>
    );
  }
}
