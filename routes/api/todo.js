const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");
const User = require("../../models/User");
const Todo = require("../../models/Todo");

//@route Get api/todo
//@desc Get the current users todos
//@access Private
router.get("/", auth, async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id }).sort({ date: -1 });
    if (!todos) {
      res.json({
        msg: "let's create some todo list"
      });
    }
    res.json(todos);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route POST api/todo
//@desc create or update users todos
//@access Private
router.post(
  "/",
  [
    auth,
    check("taskname", "Task name is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newTodo = new Todo({
        taskname: req.body.taskname,
        comment: req.body.comment,
        user: req.user.id
      });
      const todo = await newTodo.save();
      res.json(todo);
    } catch (error) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route PUT api/todo/update
//@desc  update users todos/ isComplete
//@access Private
router.put("/:id", auth, async (req, res) => {
  try {
    // const id = req.params.id;
    // const status = !req.body.isComplete;
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ msg: "Todo not found" });
    }
    const status = !todo.isComplete;
    todo.isComplete = status;
    await todo.save();
    res.json(todo);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route DELETE api/todo/delete
//@desc  delete users todos
//@access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ msg: "Todo not found" });
    }
    await todo.remove();
    res.json({ msg: "Todo removed" });
  } catch (error) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

module.exports = router;
