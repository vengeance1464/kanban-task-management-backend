import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const userSchema = new Schema({
    userId:String,
    name: String,
    profileUrl:String,
    emailId:String,

  },{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

const User = model('User', userSchema);
export default User