
import products from "../Data/Products.js";
import db from "../db.js";
import { faker } from '@faker-js/faker';


//retorna a lista de produtos
export async function getProducts(req, res) {

    try {
        const user = await db.collection("products").find({}).toArray(function (err, results) {
            res.send(results);// output all records
        });

    } catch (error) {
        res.status(500).send(error);
    }
}



export async function addProductsColletion(req, res) {
    try {
        // for (let i = 0; i < 5; i++) {
        //     const randomName = faker.name.findName(); // Rowan Nikolaus
        //     const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
        //     const randomCard = faker.helpers.createCard(); // An object representing a random contact card containing many properties
        //     await db.collection("products").insertOne({
        //         randomName, randomEmail, randomCard
        //     });
        // }
        await db.collection("products").insertMany(products);
        res.send("OK");
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message);
    }
}

