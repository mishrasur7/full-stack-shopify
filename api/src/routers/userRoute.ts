import express from 'express'
import passport from 'passport'

import userController from '../controllers/userController'
import authentication from '../middlewares/authenticationMiddleware'

const router = express.Router()

router.get(
  '/',
  passport.authenticate('jwt'),
  authentication.verifyAdmin,
  userController.findAll
)
router.get('/:userId', userController.findById)
router.post('/', userController.createUser)
router.post('/login', authentication.authenticateUser, userController.userLogin)
router.put('/:userId', userController.updateUser)
router.delete('/:userId', userController.deleteUser)

export default router
