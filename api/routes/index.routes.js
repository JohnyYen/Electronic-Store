import { Router } from "express";
import { renderInitialPage } from "../controllers/index.controller.js";

export const indexRouter = new Router();

indexRouter.get('/', renderInitialPage);
