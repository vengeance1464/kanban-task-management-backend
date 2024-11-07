import OpenAI from "openai";
import BoardService from "../services/BoardService";
import UserService from "../services/UserService"
import { response } from "express";

class AssistantController
{

    private openAIService;
    constructor()
    {
        this.openAIService= new OpenAI({apiKey: process.env.OPENAI_API_KEY});
    }


    async fetchAIResponse(message:string)
    {
        try
        {
        console.log("message ",message)
        message=`${message}  in the form of json response and dont write any other text.Each task element should have two properties title and subtasks`
        const response:any=  await this.openAIService.chat.completions.create({
            messages: [{role: "system", content: "How You can help me ?"},{ role: 'user', content: message }],
            model: 'gpt-3.5-turbo',
          });

          //console.log("response ",response.choices[0])
          if(response && response.choices && response.choices.length>0)
          {
            
            return  response.choices[0].message.content
          }

        return ""
        }catch(err)
        {
            throw err
        }
    }
}

export default AssistantController