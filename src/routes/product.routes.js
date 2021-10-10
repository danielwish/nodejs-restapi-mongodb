import { Router } from 'express'
const router = Router()

import * as productController from "../controllers/product.controller";
import { authJwt } from '../middlewares'

router.get('/', productController.selectProducts)
router.get('/:id', productController.selectProductById)
router.post('/', [authJwt.verifyToken, authJwt.isModerator], productController.insertProduct)
router.put('/:id', [authJwt.verifyToken, authJwt.isModerator], productController.updateProductById)
router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], productController.deleteProductById)

export default router;