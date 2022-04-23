// build your `Task` model here
const db = require("../../data/dbConfig");

const getAll = () => {
  return db("tasks")
    .join("projects", "projects.project_id", "tasks.project_id")
    .select(
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.task_completed",
      "projects.project_name",
      "projects.project_description"
    );
};

const add = (task) => {
  return db("tasks")
    .insert(task)
    .then(([task_id]) => {
      return db("tasks").where("task_id", task_id).first();
    });
};

module.exports = { getAll, add };
