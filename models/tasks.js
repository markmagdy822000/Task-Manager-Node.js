const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
    },
    archived:{
        type: Boolean,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const  Task = mongoose.model('Task', taskSchema);

module.exports ={   Task }
