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


const getArchived = async (req,res)=>{
    try{
        const task = await Task.find({archived: true });
        res.status(200).send(task);
        
    } catch(error) {
        res.status(400).send(error);
    }
}


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
        if(req.params.password == password) {
            const result = validateTask(req.body)
            if(result.error) return res.status(400).send(result.error.details[0].message)
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
            if(req.body.archived) task.archived= req.body.archived

            await task.save();
            res.status(200).send(task);
        }else {
            res.status(400).send('wrong password')
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



const isCompleted = async (req,res)=>{
    try{
        const task = await Task.find({isCompleted: req.params.isCompleted});
        res.status(200).send(task);
        
    } catch(error) {
        res.status(400).send(error);
    }
}

const deleteCompletedTasks = async(req, res)=>{
    try{
            const tasks  = await Task.find({isCompleted: req.params.isCompleted})
            if(!tasks) return res.status(400).send('no tasks found')
            
            await Task.deleteMany({isCompleted: req.params.isCompleted})
            res.status(200).send(tasks)
    
        } catch(error)
        {
            res.status(400).send(error)
        }
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
    addTask,
    deleteTask,
    updateTask,
    percentageCompleted,
    getTasksAfterDate,
    getArchived,
    getTaskByName,
    isCompleted,
    deleteCompletedTasks

}
