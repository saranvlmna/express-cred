import { Router } from "express";
import { AuthController } from "../controller/user";
export const authRouter = Router();
let authController = new AuthController();

authRouter.post("/", authController.createUser);
