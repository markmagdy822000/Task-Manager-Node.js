const {Router} = require ('express')
const taskRouter = Router()
const taskController = require('../controllers/tasks')

taskRouter
    .get('/api/v1/tasks',taskController.getAllTasks)
    .get('/api/v1/tasks/:id',taskController.getTaskById)
    .post('/api/v1/tasks',taskController.addTask)
    .delete('/api/v1/tasks/:id',taskController.deleteTask)
    

module.exports = {taskRouter}