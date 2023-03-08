
import express from "express";
const router = express.Router()
import { homeController } from "../controllers/homecontroller.js";
import { aboutController } from "../controllers/aboutController.js";
import { productController } from "../controllers/productController.js";
import { galleryController } from "../controllers/galleryController.js";
import { contactController } from "../controllers/contactController.js";
// import { errorController } from "../controllers/errorController.js";

router.get('/', homeController)
router.get('/about', aboutController)
router.get('/product', productController)
router.get('/gallery', galleryController)
router.get('/contact', contactController)
// router.get('*', errorController)

import { join } from 'path'

router.use((req, res, next) => {
   const err = new Error('Not Found')
   err.status = 404
   next(err)
})

// Error handling middleware
router.use((err, req, res, next) => {
   res.status(err.status || 500)
   res.sendFile(join(process.cwd(), 'views', 'error.html'))
}) 

export default router