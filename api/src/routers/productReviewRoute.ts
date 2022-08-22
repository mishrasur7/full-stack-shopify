import express from 'express'

import productReviewController from '../controllers/productReviewController'

const router = express.Router()

router.get('/', productReviewController.findAll)
router.get('/:productId', productReviewController.findById)
router.post('/', productReviewController.findAll)
router.put('/:productId', productReviewController.updateProductReview)
router.delete('/:productId', productReviewController.deleteProductReview)

export default router
