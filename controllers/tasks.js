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

const addTask = async(req,res)=>{
    try{
        //authorization
        if(req.body.password == password) {
            const task = await Task.create(req.body)
            res.status(200).send(task);

        } else {
            res.status(400).send('wrong password!')
        }      
    } catch(error) {
        res.status(400).send(error);
    }

}

module.exports={
    getAllTasks,
    getTaskById,
    addTask
    
}
