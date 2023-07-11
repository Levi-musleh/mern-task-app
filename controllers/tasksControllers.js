const Task = require("../backend/models/taskModel");

// Add a task
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
};
// Get all tasks
const addTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get a single task
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.status(200).json(task);
  } catch (error) {
    if (error.name === "CastError") {
      const { id } = req.params;
      return res
        .status(404)
        .json({ error: `No task could be found with id: ${id}` });
    }

    res.status(500).json(error);
  }
};

// Delete a single Task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);

    res.status(200).json({ msg: `Delete task ${task}` });
  } catch (error) {
    res.status(500).json({
      msg: `Something happend while attempting to delete the task with the provided id`,
      err: error,
    });
  }
};

// Update a task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).json({ msg: `Updated Task with id: ${id}`, task });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
module.exports = {
  addTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
};
