
import products from "../Data/Products.js";
//retorna a lista de produtos
export async function getProducts(req, res) {
    res.send(products);
}   