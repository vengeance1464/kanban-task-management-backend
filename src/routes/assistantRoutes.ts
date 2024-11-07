import express from 'express';
import UserController from '../controllers/userController';
import BoardController from '../controllers/boardController';
import AssistantController from '../controllers/assistantController';


const router = express.Router();
const assistantController=new AssistantController()

 router.get('/getAIResponse', async (req, res) => {
   console.log("Code reaching here in AI ")
    const allTasks=await assistantController.fetchAIResponse(req?.query?.message as string)
    res.send(allTasks);
 });

 export {router as assistantRouter}