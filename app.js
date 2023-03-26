const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
app.use(express.json());

const port = 3000
app.listen(port,()=>console.log(`listening on port ${port}`))