const {Router} = require ('express')
const taskRouter = Router()

const taskController = require('../controllers/tasks')

taskRouter    
    .get('/api/v1/tasks',taskController.getAllTasks)
    .get('/api/v1/tasks/getTaskById/:id',taskController.getTaskById)
    .get('/api/v1/tasks/percentageCompleted',taskController.percentageCompleted)

    .post('/api/v1/tasks/:password',taskController.addTask)

    .delete('/api/v1/tasks/:password/:id/',taskController.deleteTask)

    .patch('/api/v1/tasks/:password/:id',taskController.updateTask)

module.exports = {taskRouter}
