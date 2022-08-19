import { Request, Response, NextFunction } from 'express'
import productService from '../../src/services/productService'
import Product from '../../src/models/Product'
import { BadRequestError } from '../../src/helpers/apiError'

// GET all products
const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await productService.findAll(0, 5, 'price'))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET product by id
const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await productService.findById(req.params.productId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

//post product to database
const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, price, sellerId, images, categories, reviews } = req.body

    const product = new Product({
      title,
      price,
      sellerId,
      images,
      categories,
      reviews,
    })
    await productService.createOne(product)
    res.json(product)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT product to database
const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const productId = req.params.productId
    const updatedProduct = await productService.updateOne(productId, update)
    res.json(updatedProduct)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE product from database
const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await productService.deleteOne(req.params.productId)
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
  updateProduct,
  deleteProduct,
  createProduct,
}
