import express from 'express';
import UserController from '../controllers/userController';
import BoardController from '../controllers/boardController';
import TaskController from '../controllers/taskController';


const router = express.Router();



router.post('/add', (req, res) => {
    const taskController=new TaskController()
   taskController.addTask(req)
    res.send('Board added successfully');
 });


 router.put('/update', (req, res) => {
    const taskController=new TaskController()
   taskController.updateTask(req)
    res.send('Board added successfully');
 });

 router.delete('/delete', (req, res) => {
    const taskController=new TaskController()
   taskController.deleteTask(req)
    res.send('Board added successfully');
 });

 router.get('/getAll/:id',async (req,res)=>{
   const taskController=new TaskController()
  const tasks= await taskController.fetchAllTasks(req)
    res.send(tasks);

 });

 export {router as taskRouter}