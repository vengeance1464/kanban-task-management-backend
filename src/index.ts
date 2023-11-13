import express from 'express';
import bodyParser from 'body-parser'; // Import the centralized route handler
import { isRequestAuthenticated } from './middlewares';
import  { Request, Response,  } from 'express';
import cors from 'cors';
import { initializeApp } from './initializeFirebase';



initializeApp()
const app = express();

// Middlewares
// Setup CORS
app.use(cors({
    origin: 'http://localhost:3000', // Replace with the domain you want to allow
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // HTTP methods to allow
    allowedHeaders: ['Content-Type', 'Authorization'] // Headers to allow
  }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(isRequestAuthenticated)


app.get("/kanban",(req:Request,res:Response)=>{
    console.log("ndigkndk")
    res.status(200).send("Cool")
})
// Use centralized route handling

//app.use('/', routes);
app.listen(3001, () => console.log('Server running on port 3001'));
export default app;
