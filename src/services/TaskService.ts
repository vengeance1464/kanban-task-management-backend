import Board from "../models/boardSchema";
import Task from "../models/taskSchema";
import BaseService from "./BaseService";


class TaskService extends BaseService{


    addTask(taskModel:any)
    {
     const task=new Task()
     task.userId=taskModel.userId
     task.title=taskModel.title
     task.description=taskModel.description
     task.subtasks=taskModel.subtasks
     task.id=taskModel.id
     task.status=taskModel.status
     task.boardId=taskModel.boardId
     this.add(task)
    }


     updateTask(taskModel:any)
    {
         console.log("update")
         this.updateOne(Task,{userId:taskModel.userId,id:taskModel.id,boardId:taskModel.boardId},taskModel)
        //const document=await Task.findOneAndUpdate({userId:task.userId,id:task.id},task,{new:true})
    }


      deleteTask(criteria:any)
      {
        this.deleteOne(Task,criteria)
      } 

      async fetchAllTasks(criteria:any)
      {
         return await this.findMultiple(Task,criteria)
      }
  
}


export default TaskService