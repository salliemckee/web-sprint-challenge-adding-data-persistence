// build your `/api/projects` router here
const express = require("express");
const router = express.Router();
const Project = require("./model");

router.post("/", (req, res, next) => {
  const newProject = req.body;

  Project.add(newProject)
    .then((project) => {
      if (project.project_completed === 0) {
        project.project_completed = false;
      } else {
        project.project_completed = true;
      }

      res.status(201).json(project);
    })
    .catch(next);
});

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.getAll();
    projects.forEach((project) => {
      if (project.project_completed === 0) {
        project.project_completed = false;
      } else {
        project.project_completed = true;
      }
    });

    // if (
    //   !req.body.project_name ||
    //   !req.body.project_description ||
    //   !req.body.project_completed
    // ) {
    //   res.status(400).json("needs a name, description, and completed");
    // } else {
    res.json(projects);
    // }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
