const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

//creating a new task
router.post("/", taskController.createTask);

//GET all tasks for Logged in users
router.get("/", taskController.getAllTasks)

//GET a specific Task by ID
router.get("/:id", taskController.getTaskById)

//UPDATE a task by ID
router.put("/:id", taskController.updateTask)

//DELETE a task
router.delete("/:id", taskController.deleteTask)

module.exports = router;