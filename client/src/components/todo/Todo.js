import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo, loadTodos } from "../../actions/todo";
import { setAlert } from "../../actions/alert";

import TodoItem from "./TodoItem";

const Todo = ({ addTodo }) => {
  const [formData, setFormData] = useState({
    taskname: ""
  });

  const { taskname } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    // console.log(formData);
    e.preventDefault();
    addTodo(formData);
    setFormData({ taskname: "" });
  };

  return (
    <Fragment>
      <div class='add-todo'>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <input
            type='text'
            class=' todo-list-input'
            placeholder='What do you need to do today?'
            name='taskname'
            value={taskname}
            onChange={e => onChange(e)}
          />
          {/* <span type='submit' className='addBtn' onSubmit={e => onSubmit(e)}>
            Add
          </span> */}
          <input type='submit' className='btn btn-primary' />
        </form>
      </div>

      <TodoItem />
    </Fragment>
  );
};

addTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps, { addTodo, loadTodos, setAlert })(Todo);
