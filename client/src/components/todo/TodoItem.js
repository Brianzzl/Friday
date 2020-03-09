import React from "react";
// import { Link, Redirect } from "react-router-dom";

const TodoItem = () => {
  return (
    <div class='todoItem'>
      <ul id='myUL'>
        <li>Hit the gym</li>
        <li class='checked'>Pay bills</li>
        <li>Meet George</li>
        <li>Buy eggs</li>
        <li>Read a book</li>
        <li>Organize office</li>
      </ul>
    </div>
  );
};

export default TodoItem;
