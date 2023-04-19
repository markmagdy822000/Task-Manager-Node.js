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
    
    
const getTasksAfterDate = async (req, res) => {
    const {date} = req.params;
  
    try {
      const tasks = await Task.find({ dueDate: { $gte:date.toString()} });
    //   res.json(tasks)
      res.status(200).send(tasks)
      if(!tasks) return res.send('no tasks found')

    } catch (err) {
      
      res.status(500).json({ message: 'Server Error' });
    }
  };
 
module.exports={
    getAllTasks,
    getTaskById,
    getTasksAfterDate
    
}
