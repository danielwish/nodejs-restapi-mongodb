import { Router } from 'express'
import * as productController from "../controllers/product.controller";

const router = Router()

router.get('/', productController.selectProducts)
router.get('/:id', productController.selectProductById)
router.post('/', productController.insertProduct)
router.put('/:id', productController.updateProductById)
router.delete('/:id', productController.deleteProductById)

export default router;