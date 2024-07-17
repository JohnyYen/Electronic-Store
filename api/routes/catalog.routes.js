import { Router } from "express";
import { getProducts, getProductsByFilters, getProductsByLike } from "../controllers/catalog.controller.js";

export const catalogRouter = new Router();

catalogRouter.get('/catalog', getProducts);
catalogRouter.get('/catalog/filter', getProductsByFilters);
catalogRouter.get('/catalog/like', getProductsByLike);