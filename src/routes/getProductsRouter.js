import { Router } from "express";
import { getProducts } from "../contollers/getProductsController.js";


const getProductsRouter = Router();
getProductsRouter.get("/api/products", getProducts)

export default getProductsRouter
