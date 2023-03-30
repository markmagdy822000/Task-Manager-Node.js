const express = require('express')
const app = express();
app.use(express.json());
const {taskRouter} = require('./routes/tasks')
app.use(taskRouter)

module.exports = {app}