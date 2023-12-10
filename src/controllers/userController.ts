import UserService from "../services/UserService"

class UserController
{

    private userService;
    constructor()
    {
        this.userService=new UserService()
    }
    addUser(user:any)
    {

        this.userService.addUser(user)
    }
}

export default UserController