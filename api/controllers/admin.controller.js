import { allProducts, updateProducts } from "../models/queries.js";

export function renderAdminPage(req, res){
    allProducts()
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
}

export function updateProduct(req,res){
    const {name, description, url, price, id} = req.body;
    updateProducts(name, description, price, url, id)
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
}