// router is middle ware => a function injected when request comes
// router send the request to suitable controller
const {app} = require('./app')

const port =  process.env.PORT || 3000
app.listen(port,()=>console.log(`listening on https://localhost:${port}/api/v1/tasks`))