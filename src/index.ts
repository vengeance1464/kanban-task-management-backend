import express from 'express';
import bodyParser from 'body-parser'; // Import the centralized route handler
import { isRequestAuthenticated } from './middlewares';
import  { Request, Response,  } from 'express';
import cors from 'cors';
import { initializeApp } from './initializeFirebase';
import User from './models/userSchema';
import connectToMongoDB from './initializeMongoose';
import { userRouter } from './routes/userRoutes';
import { boardRouter } from './routes/boardRoutes';
import { taskRouter } from './routes/taskRoutes';
import * as dotenv from "dotenv";
dotenv.config();

initializeApp()
connectToMongoDB()

const app = express();

// Middlewares
// Setup CORS
app.use(cors({
    origin: ['http://localhost:3000',process.env.ALLOWED_HOST!], // Replace with the domain you want to allow
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // HTTP methods to allow
    allowedHeaders: ['Content-Type', 'Authorization'] // Headers to allow
  }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(isRequestAuthenticated)

app.use("/users",userRouter)
app.use("/board",boardRouter)
app.use("/tasks",taskRouter)
// Use centralized route handling

//app.use('/', routes);
app.listen(process.env.PORT||3001, () => console.log('Server running on port 8080'));
export default app;
