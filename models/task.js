import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    content: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

});

export default mongoose.model('Task', taskSchema);

    // create a task and get a task