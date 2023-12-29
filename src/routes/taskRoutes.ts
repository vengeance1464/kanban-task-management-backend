import express from 'express';
import UserController from '../controllers/userController';
import BoardController from '../controllers/boardController';
import TaskController from '../controllers/taskController';


const router = express.Router();



router.post('/add', (req, res) => {
    const taskController=new TaskController()
   taskController.addTask(req)
    res.send('Task added successfully');
 });


 router.put('/update', (req, res) => {
    const taskController=new TaskController()
   taskController.updateTask(req)
    res.send('Task updated successfully');
 });

 router.delete('/delete', (req, res) => {
    const taskController=new TaskController()
    console.log("Task delete ",req.body)
   taskController.deleteTask(req)
    res.send('Task deleted successfully');
 });

 router.get('/getAll/:id',async (req,res)=>{
   const taskController=new TaskController()
  const tasks= await taskController.fetchAllTasks(req)
    res.send(tasks);

 });

 router.get('/getStats/:id?',async (req,res)=>{
   const taskController=new TaskController()
  const tasksStats= await taskController.fetchTaskStats(req)
 res.send(tasksStats)
 });


 router.get('/filter/',async (req,res)=>{
   const taskController=new TaskController()
   const filteredTasks= await taskController.filterTasks(req)
   res.send(filteredTasks)

 })

 export {router as taskRouter}