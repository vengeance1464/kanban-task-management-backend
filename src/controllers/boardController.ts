import BoardService from "../services/BoardService";
import UserService from "../services/UserService"

class BoardController
{

    private boardService;
    constructor()
    {
        this.boardService=new BoardService()
    }
    addBoard(request:any)
    {
         console.log("Req ",request)
        const board={
           userId:request.user.user_id,
           ...request.body
        }
        this.boardService.addBoard(board)
    }

    async fetchAllBoards(request:any)
    {
        const boards=await this.boardService.fetchAllBoards(request.user.user_id)
        console.log("boards ",boards)
        return boards
    }
}

export default BoardController