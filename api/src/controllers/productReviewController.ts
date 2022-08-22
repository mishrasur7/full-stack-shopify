import { Request, Response, NextFunction } from 'express'

import productReviewService from '../../src/services/productReviewService'
import { BadRequestError } from '../../src/helpers/apiError'
import ProductReview from '../../src/models/ProductReview'

// GET all productReviews
const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await productReviewService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET productReview by id
const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await productReviewService.findById(req.params.productReviewId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

//post productReview to database
const createProductReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { reviewerId, productId, rating, comment } = req.body
    const productReview = new ProductReview({
      reviewerId,
      productId,
      rating,
      comment,
    })
    await productReviewService.createOne(productReview)
    res.json(productReview)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT productReview to database
const updateProductReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const productReviewId = req.params.productReviewId
    const updatedProductReview = await productReviewService.updateOne(
      productReviewId,
      update
    )
    res.json(updatedProductReview)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE productReview from database
const deleteProductReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await productReviewService.deleteOne(req.params.productReviewId)
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
  updateProductReview,
  deleteProductReview,
  createProductReview,
}
