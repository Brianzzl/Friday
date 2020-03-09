const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  taskname: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  isComplete: { type: Boolean, default: false },
  comment: { type: String }
});

module.exports = Todo = mongoose.model("Todo", TodoSchema);
