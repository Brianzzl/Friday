import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../../actions/todo";
import { setAlert } from "../../actions/alert";

const singleTodoCompleted = ({
  deleteTodo,
  toggleTodo,
  todo: { _id, taskname, isComplete }
}) => {
  return (
    <li className='checked' isComplete={isComplete}>
      <div onClick={() => toggleTodo(_id)}>{taskname}</div>
      <span className='close' onClick={() => deleteTodo(_id)}>
        x
      </span>
    </li>
  );
};
singleTodoCompleted.propTypes = {
  setAlert: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

export default connect(null, { deleteTodo, toggleTodo, setAlert })(
  singleTodoCompleted
);
