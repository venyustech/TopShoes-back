
import products from "../Data/Products.js";
//retorna o produto
export async function getProduct(req, res) {
    const { index } = req.params;
    res.send(products[index]);
}   