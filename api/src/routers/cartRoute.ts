import express from 'express'

import cartController from '../controllers/cartController'

const router = express.Router()

router.get('/', cartController.findAll)
router.get('/:userId', cartController.findById)
router.post('/', cartController.findAll)
router.put('/:userId', cartController.updateCart)
router.delete('/:userId', cartController.deleteCart)

export default router
