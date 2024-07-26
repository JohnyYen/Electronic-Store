import { allProducts, allTypes, filterProductsByLike, filterProductsByType } from "../models/queries.js";

export function getProducts(req, res){
    allProducts()
    .then((data)=> res.json(data))
    .catch((error) => console.log(error));
}

export function getTypes(req, res){
    allTypes()
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
}

export function getProductsByFiltersType(req, res){
    const {type} = req.body;
    console.log(type);
    filterProductsByType(type)
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
}

export function getProductsByLike(req, res){
    const {like} = req.body;
    filterProductsByLike(like)
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
}