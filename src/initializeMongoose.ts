import mongoose from 'mongoose';
import * as dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.DATABASE_URL!;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
};

export default connectToMongoDB