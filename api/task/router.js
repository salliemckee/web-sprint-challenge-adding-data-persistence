// build your `/api/tasks` router here
const express = require("express");
const router = express.Router();
const Task = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.getAll();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
