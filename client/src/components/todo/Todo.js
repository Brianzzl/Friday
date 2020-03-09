import React, { Fragment } from "react";

const Todo = () => {
  return (
    <Fragment>
      <div class='add-todo'>
        <input
          type='text'
          class=' todo-list-input'
          placeholder='What do you need to do today?'
        />
        <span className='addBtn'>Add</span>
      </div>

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
    </Fragment>
  );
};
export default Todo;
