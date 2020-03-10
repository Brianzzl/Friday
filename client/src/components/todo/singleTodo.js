import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTodo } from "../../actions/todo";
import { setAlert } from "../../actions/alert";
import { toggleTodo } from "../../actions/todo";

const singleTodo = ({
  deleteTodo,
  toggleTodo,
  todo: { _id, taskname, isComplete }
}) => {
  return (
    <li onClick={toggleTodo} isComplete={isComplete}>
      <div onClick={() => toggleTodo(_id)}>{taskname}</div>
      <span className='close' onClick={() => deleteTodo(_id)}>
        x
      </span>
    </li>
  );
};
singleTodo.propTypes = {
  setAlert: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

export default connect(null, { deleteTodo, setAlert, toggleTodo })(singleTodo);
