import express from 'express';
import bodyParser from 'body-parser'; // Import the centralized route handler
import { isRequestAuthenticated } from './middlewares';
import  { Request, Response,  } from 'express';

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(isRequestAuthenticated)


app.get("/kanban",(req:Request,res:Response)=>{
    res.status(200).send("Cool")
})
// Use centralized route handling

//app.use('/', routes);
app.listen(3001, () => console.log('Server running on port 3000'));
export default app;
