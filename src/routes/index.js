import { Router } from "express";
import authRouter from "./authRouter.js";
import getProductRouter from "./getProductRouter.js";
import getProductsRouter from "./getProductsRouter.js";

const router = Router();

router.use(authRouter);
router.use(getProductsRouter);
router.use(getProductRouter)

export default router;