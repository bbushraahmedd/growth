import User from "../models/user.js";
import Task from "../models/task.js";

export default {
    create,
    index,
    deleteTask
};

async function create(req, res){
    console.log(req.user, "<<THATS YOUR USER", req.body)

    try {
        console.log(req.body.content)
        const task = await Task.create({
            user: req.user_id,
            
            content: req.body.content
        })
        console.log(task.content, "CONTENT")
        res.status(201).json({task})
        return await task.populate('user')
        

    } catch (err) {
        res.status(400).json({err})
        console.log(err)
    }
}



async function index(req, res){
    try {
        const tasks = await Task.find({}).populate("user").exec();
        res.status(200).json({data: tasks});
    } catch (err) {
        res.status(400).json({err})
    }
}

async function deleteTask(req, res) {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.join({content: 'task removed'})
    } catch (err) {
        res.status(400).json({err});
    }
}
