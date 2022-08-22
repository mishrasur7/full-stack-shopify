import express from 'express'

import categoryController from '../controllers/categoryController'

const router = express.Router()

router.get('/', categoryController.findAll)
router.get('/:userId', categoryController.findById)
router.post('/', categoryController.findAll)
router.put('/:userId', categoryController.updateCategory)
router.delete('/:userId', categoryController.deleteCategory)

export default router
