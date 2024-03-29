import { Router } from "express";
import { AuthController } from "../controller/user";
export const authRouter = Router();
let authController = new AuthController();

authRouter.post("/create", authController.createUser);
authRouter.get("/list", authController.listUser);
authRouter.put("/edit", authController.editUser);
authRouter.delete("/delete", authController.deleteUser);
