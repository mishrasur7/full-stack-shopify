import express from 'express'
import multerServices from '../services/multerServices'

import productController from '../../src/controllers/productController'

const router = express.Router()

// Every path we define here will get /api/v1/products prefix
router.post(
  '/',
  multerServices.uploadProductImage,
  productController.createProduct
)
router.get('/', productController.findAll)
router.get('/:productId', productController.findById)
router.put('/:productId', productController.updateProduct)
router.delete('/:productId', productController.deleteProduct)

export default router
