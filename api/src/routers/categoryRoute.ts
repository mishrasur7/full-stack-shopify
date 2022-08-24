import express from 'express'
import multerServices from '../services/multerServices'

import categoryController from '../controllers/categoryController'

const router = express.Router()

router.get('/', categoryController.findAll)
router.get('/:categoryId', categoryController.findById)
router.post(
  '/',
  multerServices.uploadCategoryImage,
  categoryController.createCategory
)
router.put('/:categoryId', categoryController.updateCategory)
router.delete('/:categoryId', categoryController.deleteCategory)

export default router
