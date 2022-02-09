import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.js";

const auth = Router();
auth.post("/sign-up", signUp);
auth.post("/sign-in", signIn);

export default auth;