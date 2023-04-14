const {Task} =  require('../models/tasks')


const getAllTasks = (req,res)=>{
    res.send(tasks)
}

const getTaskById = (req,res)=>{
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    res.send(task)
}

// from postman
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
