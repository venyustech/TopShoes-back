
import products from "../Data/Products.js";
import db from "../db.js";

export async function getProducts(req, res) {

    try {
        const user = await db.collection("products").find({}).toArray(function (err, results) {
            res.send(results);
        });

    } catch (error) {
        res.status(500).send(error);
    }
}
export async function getProduct(req, res) {
    try {
        const user = await db.collection("products").findOne({ id: parseInt(req.params.index) })
        res.send(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message);
    }
}

export async function putProduct(req, res) {
    try {
        for (let element in req.body) {
            console.log(req.body[element])
            const product = await db.collection("products").findOne({ id: parseInt(req.body[element].id) })
            if (!product) {
                res.sendStatus(404)
                return;
            }
            if (product.stock < req.body[element].stock) {
                res.status(412).send(`Quantidade no stock ${product.stock}`);
                return;
            }

            await db.collection("products").updateOne({
                id: parseInt(req.body[element].id)
            }, { $set: { "stock": product.stock - req.body[element].stock } })
        };
        res.send("ok")
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message);
    }
}

export async function addProductsColletion(req, res) {
    try {
        await db.collection("products").insertMany(products);
        res.send("OK");
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message);
    }
}

