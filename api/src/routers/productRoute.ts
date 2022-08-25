import express from 'express'
import multerServices from '../services/multerServices'

import productController from '../../src/controllers/productController'
import passport from 'passport'
import authentication from '../middlewares/authenticationMiddleware'

const router = express.Router()

// Every path we define here will get /api/v1/products prefix
router.post(
  '/',
  multerServices.uploadProductImage,
  productController.createProduct
)
router.get('/', productController.findAll)
router.get('/:productId', productController.findById)
router.put(
  '/:productId',
  passport.authenticate('jwt'),
  authentication.verifyAdmin,
  productController.updateProduct
)
router.delete(
  '/:productId',
  passport.authenticate('jwt'),
  authentication.verifyAdmin,
  productController.deleteProduct
)

export default router
