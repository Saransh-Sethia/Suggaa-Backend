const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    status:{
        type: String,
        required: true,
        enum: ["Pending", "Completed"],
        default:"Completed",
    },
},
{
    timestamps: true
}
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;