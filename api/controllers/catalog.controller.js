import {  } from "../models/queries.js";

export function getProducts(req, res){
    res.send("This all products");
}

export function getProductsByFilters(req, res){
    res.send("This all productos with filter");
}

export function getProductsByLike(req, res){
    res.send("This all products like that");
}