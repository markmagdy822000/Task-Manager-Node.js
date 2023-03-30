const {Router} = require ('express')
const taskRouter = Router()
const taskController = require('../controllers/tasks')

taskRouter
    .get('/api/v1/tasks',taskController.getAllTasks)
    

module.exports = {taskRouter}