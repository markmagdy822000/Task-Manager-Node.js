const {Router} = require ('express')
const taskRouter = Router()

const taskController = require('../controllers/tasks')

taskRouter
    .get('/api/v1/tasks',taskController.getAllTasks)
    .post('/api/v1/tasks',taskController.addTask)
    .get('/api/v1/tasks/:id',taskController.getTaskById)
    .delete('/api/v1/tasks/:id',taskController.deleteTask)
    .patch('/api/v1/tasks/:id',taskController.updateTask)


module.exports = {taskRouter}