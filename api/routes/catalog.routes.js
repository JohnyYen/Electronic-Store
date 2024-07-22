import { Router } from "express";
import { getProducts, getProductsByFiltersType, getProductsByLike, getTypes } from "../controllers/catalog.controller.js";

export const catalogRouter = new Router();

//Products
catalogRouter.get('/catalog', getProducts);
catalogRouter.post('/catalog/filter', getProductsByFiltersType);
catalogRouter.post('/catalog/like', getProductsByLike);

//Types
catalogRouter.get('/types', getTypes);