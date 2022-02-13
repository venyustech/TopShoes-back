
import products from "../Data/Products.js";

export async function getProducts(req, res) {
    res.send(products);
}   