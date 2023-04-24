import { Component } from "react";
import Date from "./Date";
import TodoList from "./TodoList";

export default class TodoContainer extends Component {
  render() {
    return <div className="TodoContainer">
        <Date/>
        <TodoList/>
        </div>;
  }
}
