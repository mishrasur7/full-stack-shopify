import { Request, Response, NextFunction } from 'express'

import addressService from '../../src/services/addressService'
import { BadRequestError } from '../../src/helpers/apiError'
import Address from '../../src/models/Address'

// GET all addresses
const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await addressService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET address by id
const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await addressService.findById(req.params.addressId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

//post address to database
const createAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { streetname, city, country, state, postalcode } = req.body

    const address = new Address({
      streetname,
      city,
      country,
      state,
      postalcode,
    })
    await addressService.createOne(address)
    res.json(address)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT address to database
const updateAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const addressId = req.params.addressId
    const updatedProduct = await addressService.updateOne(addressId, update)
    res.json(updatedProduct)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE address from database
const deleteAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await addressService.deleteOne(req.params.addressId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export default {
  findAll,
  findById,
  updateAddress,
  deleteAddress,
  createAddress,
}
