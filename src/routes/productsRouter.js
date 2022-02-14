import { Router } from "express";
import { addProductsColletion, getProduct, getProducts, putProduct } from "../contollers/productsController.js"

const productsRouter = Router();
productsRouter.get("/api/products", getProducts)//listar todos produtos
productsRouter.get("/api/addProductColletionValues", addProductsColletion);// adicionar coleção no mongo
productsRouter.get("/api/products/:index", getProduct)//listar 1 produto por index
productsRouter.put("/api/products", putProduct)// espera um put do tipo [{ id: 0, stock: 10 }, { id: 1, stock: 5 }] 

export default productsRouter
