import express from 'express';
import productsController from '../../controllers/productsController.js'

const router = express.Router();

router
    .get("/", productsController.getAllProducts)
    .get("/:productId", productsController.getProductById)
    .get("/img/:productId", productsController.getProductImageById)
    .post("/", productsController.createProduct)
    .patch("/:productId", productsController.updateProductById)
    .delete("/:productId", productsController.deleteProductById)


export { router as v1ProductsRouter };