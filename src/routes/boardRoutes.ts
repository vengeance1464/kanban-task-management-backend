import express from 'express';
import UserController from '../controllers/userController';
import BoardController from '../controllers/boardController';


const router = express.Router();
const boardController=new BoardController()



router.post('/add', (req, res) => {
    boardController.addBoard(req)
    res.send('Board added successfully');
 });

 router.get('/getAll', async (req, res) => {
    const allBoards=await boardController.fetchAllBoards(req)
    console.log("boards ",allBoards)
    res.send(allBoards);
 });

 export {router as boardRouter}