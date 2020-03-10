import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadTodos } from "../../actions/todo";
import { setAlert } from "../../actions/alert";
import SingleTodo from "./singleTodo";
import SingleTodoCompleted from "./completedSingleTodo";

const TodoItem = ({ loadTodos, todo: { todos } }) => {
  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  return (
    <Fragment>
      <div class='todoItem'>
        <ul id='myUL'>
          {todos
            .filter(todo => todo.isComplete === false)
            .map(todo => (
              <SingleTodo key={todo._id} todo={todo} />
            ))}
          {todos
            .filter(todo => todo.isComplete === true)
            .map(todo => (
              <SingleTodoCompleted key={todo._id} todo={todo} />
            ))}
        </ul>
      </div>
    </Fragment>
  );
};

TodoItem.propTypes = {
  setAlert: PropTypes.func.isRequired,
  loadTodos: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps, { loadTodos, setAlert })(TodoItem);
