const Joi = require('joi')

function validateTask(task){
    const schema = Joi.object({
        name:Joi.string().min(3).required(),
        isCompleted:Joi.boolean(),
        archived:Joi.bool(),
        dueDate:Joi.string()
    });

    return schema.validate(task)
}

module.exports = {validateTask}

