const Joi = require('joi');
const {tasks} =  require('../models/tasks')


const getAllTasks = (req,res)=>{
    res.send(tasks)
}
 
const getTaskById = (req,res)=>{
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    res.send(task)
}
 
module.exports={
    getAllTasks,
    getTaskById
    
}
