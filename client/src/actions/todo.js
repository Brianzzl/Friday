import axios from "axios";
import { setAlert } from "./alert";
import { TODO_ERROR, DELETE_TODO, LOAD_TODOS, ADD_TODO } from "./types";

//load authenticated users todos
export const loadTodos = () => async dispatch => {
  try {
    const res = await axios.get("/api/todo");
    dispatch({
      type: LOAD_TODOS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TODO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//add todo for this authed user
export const addTodo = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post("/api/todo", formData, config);

    dispatch({
      type: ADD_TODO,
      payload: res.data
    });

    dispatch(setAlert("Todo Created", "success"));
  } catch (err) {
    dispatch({
      type: TODO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//DELETE A TODO
export const deleteTodo = id => async dispatch => {
  try {
    await axios.delete(`api/todo/${id}`);

    dispatch({
      type: DELETE_TODO,
      payload: id
    });

    dispatch(setAlert("Todo DELETED", "warning"));
  } catch (err) {
    dispatch({
      type: TODO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
//toggle A TODO
export const toggleTodo = id => async dispatch => {
  try {
    await axios.put(`api/todo/${id}`);
    // load todo

    const res = await axios.get("/api/todo");

    // console.log(res.data);
    dispatch({
      type: LOAD_TODOS,
      payload: res.data
    });

    // dispatch(setAlert("Todo toggled", "warning"));
  } catch (err) {
    dispatch({
      type: TODO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
