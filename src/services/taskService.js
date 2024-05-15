const Task = require("../models/Task");

const createTask = async (taskData) => {
  try {
    const task = await Task.create(taskData);

    return task;
  } catch (error) {
    throw error;
  }
};

const getAllTasks = async () => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    throw error;
  }
};

const getTaskById = async (taskId) => {
  try {
    const task = await Task.findOne({ _id: taskId });
    return task;
  } catch (error) {
    throw error;
  }
};

const updateTask = async (taskId, updatedData) => {
  try {
    const task = await Task.findOneAndUpdate(
        {_id: taskId,},
        {$set: updatedData},
        {new: true}
        );
        return task;
  } catch (error) {
    throw error;
  }
};

const deleteTask = async(taskId) => {
    try{
      const task = await Task.findOneAndDelete({
        _id: taskId,
      });
      return task;
    } catch(error){
        throw error;
    }
}

module.exports = { createTask, getAllTasks, getTaskById, updateTask, deleteTask };