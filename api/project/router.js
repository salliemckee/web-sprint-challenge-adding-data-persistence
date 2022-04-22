// build your `/api/projects` router here
const express = require("express");
const router = express.Router();
const Project = require("./model");

router.post((req, res, next) => {});

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.getAll();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
