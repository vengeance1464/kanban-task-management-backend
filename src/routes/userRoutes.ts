import express from 'express';
import UserController from '../controllers/userController';


const router = express.Router();



router.post('/addUser', (req, res) => {
   const userController=new UserController()
   userController.addUser(req.body)
   res.send('User added successfully');
});


router.get('/getUser/:id',(req,res)=>{

    
})


export {router as userRouter}