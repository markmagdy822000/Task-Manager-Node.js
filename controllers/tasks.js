const Joi = require('joi');
const {tasks} =  require('../models/tasks')


const getAllTasks = (req,res)=>{
    res.send(tasks)
}
 
const getTaskById = async (req,res)=>{
    try{
        const task = await Task.find({_id: req.params.id}); //get all tasks
        res.status(200).send(task);
        
    } catch(error) {
        res.status(400).send(error);
    }
 
module.exports={
    getAllTasks,
    getTaskById
    
}
