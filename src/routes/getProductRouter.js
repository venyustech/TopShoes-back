import { Router } from "express";
import { getProduct } from "../contollers/getProductController.js";

const getProductRouter = Router();

getProductRouter.get("/api/products/:index", getProduct)

export default getProductRouter
