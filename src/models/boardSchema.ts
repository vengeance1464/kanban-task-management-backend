import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const boardSchema = new Schema({
    userId:String,
    name: String,
    id:String
  });

const Board = model('Board', boardSchema);
export default Board