import { Router } from "express";
import { renderAdminPage } from "../controllers/admin.controller.js";
import { validateLogin } from "../controllers/login.controller.js";
import multer from "multer";

const upload = multer({dest:'./public/uploads/'})



export const adminRoutes = new Router();

//LOGIN
adminRoutes.get('/login', validateLogin);

//ADMIN
adminRoutes.get('/admin', renderAdminPage);
//adminRoutes.post('/admin')
