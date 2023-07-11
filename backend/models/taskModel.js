const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name to the task!"],
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  date: {
    type: Date,
    default: () => new Date(),
  },
});

const Task = mongoose.model("Task", taskSchema, "tasks");

module.exports = Task;
