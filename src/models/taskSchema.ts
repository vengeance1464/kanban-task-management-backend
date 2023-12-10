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
    boardId:Number
  });

const Task = model('Task', taskSchema);
export default Task