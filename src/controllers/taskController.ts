import TaskService from "../services/TaskService";
import { addDate } from "../utils/utils";

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
        const id=request.params.id
        console.log("id ",id)
        const taskTodoCondition={status:"Todo"}
        const taskDoingCondition={status:"Doing"}
        const taskDoneCondition={status:"Done"}
        
        let criteria={
            userId:request.user.user_id,
            $or: [taskTodoCondition, taskDoingCondition,taskDoneCondition],
            ...request.body
        }

        if(request.params.id)
        {
            criteria={...criteria,boardId:id}
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

    async filterTasks(request:any)
    {
       // const startDate=new Date(parseInt(request.query.startDate,10))
        //const endDate=new Date(parseInt(request.query.endDate,10))
        const trend=request.query.trend;
        console.log("trend ",trend)
        let startDate;
        let endDate;
        let daysIncrement=0;
        if(trend==='Week')
        {
            startDate=new Date(parseInt((Date.now()-7*24*60*60*1000).toString()))
            endDate=new Date()
            daysIncrement=1
        }
        else if(trend==="Month")
        {
            startDate=new Date(parseInt((Date.now()-30*24*60*60*1000).toString()))
            endDate=new Date()
            daysIncrement=7
        }
        else if(trend==="Year")
        {
            startDate=new Date(parseInt((Date.now()-365*24*60*60*1000).toString()))
            endDate=new Date()
            daysIncrement=30
        }
        console.log("startDate",startDate,"End date ",endDate)
        const tasks= await this.taskService.fetchAllTasks({ 'statusHistory.date': { $gte: startDate, $lte: endDate } })
        console.log("tasks ",tasks)


         let result:object={}
            for(let date=startDate!;date<=endDate!;date=addDate(date,daysIncrement))
            {
                const dateWiseGroup=tasks.reduce((accum:any,curr:any)=>{
                    if(!(date.toString() in accum) )
                    {
                        accum[date.toString()]={
                            "Todo":0,"Doing":0,"Done":0
                        }
                    }
                   curr.statusHistory.forEach((element:any)=> {
                    if(element.date<=date)
                    {
                        console.log("")
                    accum[date.toString()][element.status]+=1
                    }
                   });
                   
                    return accum
    
                },{})
    
                console.log("date",dateWiseGroup)
    
                result={...result,...dateWiseGroup}
            }
       
        console.log("tasks ",result)

        return result
    }
}

export default TaskController