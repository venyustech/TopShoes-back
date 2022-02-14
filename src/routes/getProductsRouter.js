import { Router } from "express";
import { getProduct, getProducts, putProduct } from "../contollers/productsController.js"

const productsRouter = Router();
productsRouter.get("/api/products", getProducts)
productRouter.get("/api/addProductColletionValues", addProductColletionValues);
productRouter.get("/api/products/:index", getProduct)
productRouter.put("/api/products", putProduct)

export default productsRouter
