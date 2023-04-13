const Joi = require('joi');
const {tasks} =  require('../models/tasks')
const TaskSchema =  require('../models/tasks')
const {validateTask} = require('../helpers/validation')    

const getAllTasks = async (req,res)=>{
    try{
        const allTasks = await Task.find({}); //get all tasks
        res.status(200).send(allTasks);

    } catch(error) {
        res.status(400).send(error);
    }
};
  
module.exports={
    getAllTasks,
    
}
