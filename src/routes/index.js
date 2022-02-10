import { Router } from "express";
import authRouter from "./authRouter.js";
import { addIncome } from "./transactionsRouter.js";

const router = Router();

router.use(authRouter);
router.use(addIncome);

export default router;