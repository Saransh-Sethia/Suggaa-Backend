const taskService = require("../services/taskService")

const createTask = async(req,res) => {
    try{
        const {title, description, status} = req.body;

        const task = await taskService.createTask({
            title,
            description,
            status,
        });

        console.log("Task Created", task)

        res.status(201).json(task)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
};

const getAllTasks = async(req,res) => {
    try{
        const tasks = await taskService.getAllTasks();
        res.status(200).json(tasks);

    } catch(error){
        res.status(500).json({message: error.message})
    }
};

const getTaskById = async(req,res) => {
    try{
        const {id} = req.params;
        const task = await taskService.getTaskById(id);
        if(!task){
            return res.status(404).json({message: "Task not Found"}) //NOT Found
        }
        res.status(200).json(task);

    } catch(error){
        res.status(500).json({message: error.message})
    }
};

const updateTask = async(req,res) => {
    try{
const {id} = req.params;
const updatedData = req.body;

const task = await taskService.updateTask(id,updatedData);

if(!task){
    return res.status(404).json({message: "Task not Found"}) //NOT Found
}

res.status(200).json(task);
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

const deleteTask = async(req,res) => {
    try{
    const {id} = req.params;

    const success = await taskService.deleteTask(id);

    if(!success){
        res.status(404).json({message: "Task not Found"})
    }

    res.status(204).send();
    
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {createTask, getAllTasks, getTaskById, updateTask, deleteTask}