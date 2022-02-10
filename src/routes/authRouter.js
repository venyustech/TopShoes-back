import { Router } from "express";
import { login, singUp } from "../contollers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", singUp);

authRouter.post("/login", login);

export default authRouter; 
