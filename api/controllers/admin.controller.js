import { allProducts, updateProducts, insertType, deleteTypes, deleteProducts } from "../models/queries.js";
import { renameImage } from "./libs/uploadImage.js";

export function renderAdminPage(req, res){
    allProducts()
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
}

export function updateProduct(req,res){
    const {name, description, price} = req.body;
    const {id} = req.params;
    updateProducts([name, description, price, id])
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
}

export function insertProduct(req, res){
    const {name, description,price,id_type} = req.body;
    let newPath = renameImage(req.file);

    newPath = newPath.substring(7);

    insertProduct([name, description, price, newPath, id_type])
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
}

export function insertTypes(req, res){
    const {name_type} = req.body;
    insertType(name_type)
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
}

export function deleteType(req, res){
    const {id_type} = req.params;

    deleteTypes(id_type)
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
}


export function deleteProduct(req, res){
    const {id_prod} = req.params;

    deleteProducts(id_prod)
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
}