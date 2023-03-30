const Joi = require('joi');
const {tasks} =  require('../models/tasks')
const {validateTask} = require('../helpers/validation') 

const getAllTasks = (req,res)=>{
    res.send(tasks)
}
 
const getTaskById = (req,res)=>{
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    res.send(task)
}
const addTask = (req,res)=>{
    const result = validateTask(req.body)
    if(result.error) return res.status(400).send(result.error.details[0].message)
    
    const task={
        id: tasks.length + 1,
        name:req.body.name,
        isCompleted:req.body.isCompleted
   }
    tasks.push(task)
    res.send(task)
}


const deleteTask = (req,res)=>{
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task)  return  res.status(404).send('Task not found');
    const idx = tasks.indexOf(task);
    tasks.splice(idx , 1);    //splice(position, number of items to delete) removes array elements
    res.send(task)

}


module.exports={
    getAllTasks,
    getTaskById,
    addTask,
    deleteTask    
}
