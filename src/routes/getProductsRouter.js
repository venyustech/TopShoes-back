import { Router } from "express";
import { getProduct, getProducts } from "../contollers/productsController.js"

const productsRouter = Router();
productsRouter.get("/api/products", getProducts)
productRouter.get("/api/addProductColletionValues", addProductColletionValues);
productRouter.get("/api/products/:index", getProduct)

export default productsRouter
