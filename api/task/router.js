// build your `/api/tasks` router here
const express = require("express");
const router = express.Router();
const Task = require("./model");

router.post("/", (req, res, next) => {
  const newTask = req.body;

  Task.add(newTask)
    .then((task) => {
      if (task.task_completed === 0) {
        task.task_completed = false;
      } else {
        task.task_completed = true;
      }

      res.status(201).json(task);
    })
    .catch(next);
});

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.getAll();

    tasks.forEach((task) => {
      if (task.task_completed === 0) {
        task.task_completed = false;
      } else {
        task.task_completed = true;
      }
    });

    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
