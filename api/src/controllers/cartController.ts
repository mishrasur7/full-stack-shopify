import { Request, Response, NextFunction } from 'express'

import cartService from '../services/cartService'
import { BadRequestError } from '../../src/helpers/apiError'
import Cart from '../../src/models/Cart'

// GET all carts
const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await cartService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET cart by id
const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await cartService.findById(req.params.cartId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

//post cart to database
const createCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userid, products, deliveryaddress, status } = req.body
    const cart = new Cart({
      userid,
      products,
      deliveryaddress,
      status,
    })
    await cartService.createOne(cart)
    res.json(cart)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT cart to database
const updateCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const update = req.body
    const cartId = req.params.cartId
    const updatedCart = await cartService.updateOne(cartId, update)
    res.json(updatedCart)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE cart from database
const deleteCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await cartService.deleteOne(req.params.cartId)
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
  updateCart,
  deleteCart,
  createCart,
}
