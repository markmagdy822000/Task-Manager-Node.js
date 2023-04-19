const {Task} =  require('../models/tasks')
const {validateTask} = require('../helpers/validation')

password=1234

const getAllTasks = async (req,res)=>{
    try{
        const allTasks = await Task.find({}); //get all tasks
        res.status(200).send(allTasks);

    } catch(error) {
        res.status(400).send(error);
    }
};

const getTaskById = (req,res)=>{
    try{
        const task = await Task.find({_id: req.params.id}); //get all tasks
        res.status(200).send(task);
        
    } catch(error) {
        res.status(400).send(error);
    }
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


const updateTask = async(req, res) => {
    try{
        if(req.body.password == password) {

            const task = await Task.findOne({_id: req.params.id}); //get all tasks
            if(!task)  return  res.status(404).send('task not found')
            
            if(req.body.name) task.name = req.body.name
            if(req.body.isCompleted) task.isCompleted= req.body.isCompleted
            
            await task.save();
            res.status(200).send(task);
        }else {
            res.status(400).send(error)
        }
    } catch(error) {
        res.status(400).send(error);
    }
}

const getTaskByName = async (req,res)=>{
    try{
        const task = await Task.find({name: {$regex:req.params.name}});
        res.status(200).send(task);
        
    } catch(error) {
        res.status(400).send(error);
    }
}


const percentageCompleted = async (req,res)=>{
    try{
 
        const allTasks = await Task.find({}); 
        if(allTasks.length == 0 ) return res.send('no tasks found')
        const completedTasks = await Task.find({isCompleted: true});
        const percenatge = parseInt(completedTasks.length*100/allTasks.length)
        res.status(200).send( percenatge.toString()+'%');
        
    } catch(error) {
        res.status(400).send(error);
    }
}


module.exports={
    getAllTasks,
    getTaskById,
    addTask,
    deleteTask,
    updateTask,
    percentageCompleted
}
