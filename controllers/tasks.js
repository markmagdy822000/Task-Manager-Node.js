const {Task} =  require('../models/tasks')


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
  

module.exports={
    getAllTasks,
    getTaskById,
    addTask,
    deleteTask,
    updateTask
}
