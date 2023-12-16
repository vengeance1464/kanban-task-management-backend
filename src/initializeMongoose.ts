import mongoose from 'mongoose';

const MONGO_URI = `mongodb+srv://mongoadmin:Priyam1464@kanban-cluster.azvlyzq.mongodb.net/?retryWrites=true&w=majority`;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
};

export default connectToMongoDB