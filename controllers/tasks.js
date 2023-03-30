const Joi = require('joi');
const {tasks} =  require('../models/tasks')
const TaskSchema =  require('../models/tasks')
const {validateTask} = require('../helpers/validation')    

const getAllTasks = (req,res)=>{
    res.send(tasks)
}
  
module.exports={
    getAllTasks,
    
}
