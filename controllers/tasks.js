const TaskSchema = require('../models/tasks')

const createTask = (req, res) => {
    const task = new TaskSchema({
        title: req.body.title,
        assignee: req.body.assignee
    })
    task.save().then(()=>{
        console.log('Task Created') // print in console
        res.status(200).json({message: 'Task Created'}) // send json to requester
    }).catch((err)=>{
        res.status(500).json({message: err})
    })

    
}

const getTask = (req, res) => {
    TaskSchema.find({_id:req.params.id}, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({message: err})
        } else {
            res.status(200).json(results)
        }
    })
} 

const updateTask = async (req, res) => {
    const taskUpdate = await TaskSchema.findOneAndUpdate({_id:req.params.id}, {
        $set: {
            title: req.body.title,
            assignee: req.body.assignee
        }
    }, {new:true});

    if (taskUpdate){
        res.status(200).json({message: 'successfully update'})
    } else {
        res.status(200).json({message: 'Could not update'})
    }
} 

const deleteTask = async (req, res) => {
    const taskDelete = await TaskSchema.findByIdAndDelete({_id:req.params.id})
    if (taskDelete){
        res.status(200).json({message: 'successfully delete'})
    } else {
        res.status(200).json({message: 'Could not delete'})
    }
} 

module.exports = {createTask, getTask, updateTask, deleteTask}