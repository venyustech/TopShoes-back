import { Router } from "express";
import authRouter from "./authRouter.js";
import getProductsRouter from "./getProductsRouter.js";

const router = Router();

router.use(authRouter);
router.use(getProductsRouter);

export default router;