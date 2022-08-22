import express from 'express'

import userController from '../controllers/userController'

const router = express.Router()

router.get('/', userController.findAll)
router.get('/:userId', userController.findById)
router.post('/', userController.createUser)
router.put('/:userId', userController.updateUser)
router.delete('/:userId', userController.deleteUser)

export default router
