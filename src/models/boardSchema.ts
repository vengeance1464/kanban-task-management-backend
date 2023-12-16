import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const boardSchema = new Schema({
    userId:String,
    name: String,
    id:String
  },{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

const Board = model('Board', boardSchema);
export default Board