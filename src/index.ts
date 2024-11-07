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
import { assistantRouter } from './routes/assistantRoutes';
dotenv.config();

initializeApp()
connectToMongoDB()

const app = express();

// Middlewares
// Setup CORS
const allowedOrigins = [
  'http://localhost:3000',process.env.ALLOWED_HOST!
];
const corsOption={
  origin:'*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // HTTP methods to allow
    allowedHeaders: ['Content-Type', 'Authorization'] // Headers to allow
  }
//app.options('*', cors(corsOption));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(isRequestAuthenticated)

app.use("/users",userRouter)
app.use("/board",boardRouter)
app.use("/tasks",taskRouter)
app.use("/ai",assistantRouter)
// Use centralized route handling

//app.use('/', routes);
app.listen(process.env.PORT||3001, () => console.log('Server running on port 8080'));
export default app;