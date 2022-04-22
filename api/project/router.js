// build your `/api/projects` router here
const express = require("express");
const router = express.Router();
const Project = require("./model");

router.post("/", (req, res, next) => {
  const newProject = req.body;

  Project.add(newProject)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(next);
});

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.getAll();
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
