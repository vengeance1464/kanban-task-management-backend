import { model } from "mongoose";
import User from "../models/userSchema";
import BaseService from "./BaseService";


class UserService extends BaseService
{
    constructor()
    {
        super()
    }
     

    addUser(user:any)
    {
        const userModel = new User()
        userModel.userId=user.user_id
        userModel.name=user.name
        userModel.profileUrl=user.picture
        userModel.emailId=user.email
        this.add(userModel)
    }

    findMultipleUsers()
    {

    }

}

export default UserService