// build your `/api/resources` router here
const express = require("express");
const router = express.Router();
const Resource = require("./model");

router.post("/", (req, res, next) => {
  const newResource = req.body;

  Resource.add(newResource)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resource.getAll();
    res.json(resources);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
