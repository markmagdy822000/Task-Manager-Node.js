const Joi = require('joi');
const {tasks} =  require('../models/tasks')
const {validateTask} = require('../helpers/validation') 

const getAllTasks = async (req,res)=>{
    try{
        const allTasks = await Task.find({}); //get all tasks
        res.status(200).send(allTasks);

    } catch(error) {
        res.status(400).send(error);
    }
};

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



const deleteTask = async(req,res)=>{
    try{

        if(req.body.password == password) {
            const task  = await Task.deleteOne({_id: req.params.id})
            res.status(200).send(task)
        } else {
            res.status(400).send('wrong password!')


        }

    } catch(error)
    {
        res.status(400).send(error)
    }
}



const updateTask = (req, res) => {
    const { id: taskID } = req.params
    let task = tasks.find(t => t.id === parseInt(req.params.id));

    if (!task) {
      return `No task with id : ${taskID}`
    }
    if(req.params.id)
        task.id = parseInt(req.params.id)
    if (req.body.name)
        task.name= req.body.name
    if(req.body.isCompleted )
        task.isCompleted =req.body.isCompleted 

    res.status(200).json({ task })
  }
  

module.exports={
    getAllTasks,
    getTaskById,
    addTask,
    deleteTask,
    updateTask
}
