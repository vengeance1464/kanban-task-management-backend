import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://localhost:27017/kanban';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
};

export default connectToMongoDB