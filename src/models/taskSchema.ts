import mongoose from 'mongoose';

const { Schema, model } = mongoose;


const subTaskSchema=new Schema({
    id:Number,
    title:String,
    isCompleted:Boolean
})




const taskSchema = new Schema({
    userId:String,
    id:Number,
    title: String,
    description:String,
    subtasks:[subTaskSchema],
    status:String,
    statusHistory:Schema.Types.Mixed,
    boardId:Number
  },{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});
  

const Task = model('Task', taskSchema);

export {Task}