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

    async fetchTaskStats(request:any)
    {
        const taskTodoCondition={status:"Todo"}
        const taskDoingCondition={status:"Doing"}
        const taskDoneCondition={status:"Done"}
        const criteria={
            userId:request.user.user_id,
            $or: [taskTodoCondition, taskDoingCondition,taskDoneCondition]
        }

        const tasks= await this.taskService.fetchAllTasks(criteria)
        const taskStats=tasks.reduce((accum:any,curr:any)=>{
            if(curr.status in accum )
            {
              accum[curr.status]+=1
            }
            return accum
        },{"Todo":0,"Doing":0,"Done":0})
        console.log("statsv",taskStats)

        return taskStats
    }
}

export default TaskController