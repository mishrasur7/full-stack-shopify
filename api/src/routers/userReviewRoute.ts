import express from 'express'

import userReviewController from '../../src/controllers/userReviewController'

const router = express.Router()

// Every path we define here will get /api/v1/userreviews prefix
router.post('/', userReviewController.createUserReview)
router.get('/', userReviewController.findAll)
router.get('/:userReviewId', userReviewController.findById)
router.put('/:userReviewId', userReviewController.updateUserReview)
router.delete('/:userReviewId', userReviewController.deleteUserReview)

export default router
