const tasking = require('../model/task.js');

const Task = tasking.Task;


exports.addTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        // Save the task using async/await instead of callback
        console.log(req.body);
        const savedTask = await newTask.save();
        res.status(200).json({ message: 'Task added successfully', task: savedTask });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to save task' });
    }
};

exports.getAllTasks = async (req,res) =>{
    const tasks = await Task.find();
    res.json(tasks);
    console.log(tasks);
}


exports.deleteTask = async (req, res) => {
    const title = req.params.title;
    try{
        const doc = await Task.findOneAndDelete({_title:title});
        res.json(doc);
    }catch(err){
        console.log(err);
        res.json(err);
    }
}