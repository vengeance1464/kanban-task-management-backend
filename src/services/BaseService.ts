
export default class BaseService 
{
  
async add (model:any){
   await model.save()
}


async findOne(model:any,criteria?:any){
    
    const document= await model.findOne(criteria).sort({ createdAt: 1 })
    return document
}


async findMultiple(model:any,criteria?:any)
{
    const documents= await model.find(criteria).sort({ createdAt: 1 })
    return documents
}


async updateOne(model:any,criteria:any,data:any)
{
    const updatedDocument=await model.findOneAndUpdate(criteria,data,{new:true})
     return updatedDocument
}

async deleteOne(model:any,criteria:any)
{
    await model.findOneAndDelete(criteria)
}
}