import { StatusCodes } from "http-status-codes";
import { AuthService } from "../service/auth";
const authService = new AuthService();
export class AuthController {
  constructor() {}

  async createUser(req: Request, res: any) {
    try {
      console.log("data",req.body)
      const response = await authService.createUser(req.body);
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async listUser(req: Request, res: any) {
    try {
      const response = await authService.listUser(req.body);
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error) {
      console.log(error);
    }
  }

  
}
