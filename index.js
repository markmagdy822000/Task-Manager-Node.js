// router is middle ware => a function injected when request comes
// router send the request to suitable controller
const {app} = require('./app')

const mongoose = require('mongoose')

const port =  process.env.PORT || 3000
app.listen(port,async ()=>{
    const url="mongodb+srv://markmagdy:XqC7L3kstsTpnHfx@cluster0.gmcanta.mongodb.net/?retryWrites=true&w=majority"
    await mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true})
    console.log(`listening on https://localhost:${port}/api/v1/tasks`)
})
