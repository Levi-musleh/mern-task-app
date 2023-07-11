const express = require("express");
const router = express.Router();
const {
  addTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../../controllers/tasksControllers");

router.route("/").get(getTasks).post(addTask);
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);
// router.get("/api/tasks/", getTasks);
// router.post("/api/tasks/", addTask);
// router.get("/api/tasks/:id", getTask);
// router.delete("/api/tasks/:id", deleteTask);
// router.put("/api/tasks/:id", updateTask);

module.exports = router;
