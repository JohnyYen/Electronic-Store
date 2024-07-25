import { Router } from "express";
import { deleteProduct, deleteType, insertProduct, insertTypes, renderAdminPage, updateProduct } from "../controllers/admin.controller.js";
import { validateLogin } from "../controllers/login.controller.js";
import multer from "multer";

const upload = multer({dest:'./public/uploads/'})



export const adminRoutes = new Router();

//LOGIN
adminRoutes.post('/admin/login', validateLogin);

//ADMIN
adminRoutes.get('/admin/panel', renderAdminPage);
adminRoutes.post('/admin/panel/update/:id', updateProduct);
adminRoutes.post('/admin/panel', upload.single('imageUrl'), insertProduct);
adminRoutes.post('/admin/types', insertTypes);
adminRoutes.get('/admin/panel/delete/:id_prod', deleteProduct);
adminRoutes.get('/admin/types/delete/:id_type', deleteType);
