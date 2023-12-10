import Board from "../models/boardSchema";
import BaseService from "./BaseService";


class BoardService extends BaseService{


    addBoard(boardModel:any)
    {
     const board=new Board()
     board.name=boardModel.name
     board.userId=boardModel.userId
     board.id=boardModel.id
     this.add(board)
    }


    async fetchAllBoards(userId:string)
    {
       return await this.findMultiple(Board,{userId})
    }

}


export default BoardService