import express from 'express'

import addressController from '../controllers/addressController'

const router = express.Router()

router.post('/', addressController.createAddress)
router.get('/', addressController.findAll)
router.get('/:addressId', addressController.findById)
router.delete('/:addressId', addressController.deleteAddress)
router.put('/:addressId', addressController.updateAddress)

export default router
