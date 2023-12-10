import BoardService from "../services/BoardService";
import TaskService from "../services/TaskService";
import UserService from "../services/UserService"

class TaskController
{

    private taskService;
    constructor()
    {
        this.taskService=new TaskService()
    }
    addTask(request:any)
    {
         console.log("Req ",request)
        const task={
           userId:request.user.user_id,
           ...request.body
        }
        this.taskService.addTask(task)
    }

    updateTask(request:any)
    {
        const task={
            userId:request.user.user_id,
            ...request.body
         }
        
         this.taskService.updateTask(task)
    }

    deleteTask(request:any)
    {
        const criteria={
            userId:request.user.user_id,
            ...request.body
        }
        this.taskService.deleteTask(criteria)
    }

    async fetchAllTasks(request:any)
    {
        const criteria={
            userId:request.user.user_id,
            boardId:Number(request.params.id)
        }
        return await this.taskService.fetchAllTasks(criteria)
    }
}

export default TaskController