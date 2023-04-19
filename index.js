// router is middle ware => a function injected when request comes
// router send the request to suitable controller
require("dotenv").config()
const {app} = require('./app')

const mongoose = require('mongoose')

const port =  process.env.PORT 
app.listen(port,async ()=>{
    const url=process.env.MONGODB_URI
    await mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true})
    console.log(`listening on https://localhost:${port}/api/v1/tasks`)
})
