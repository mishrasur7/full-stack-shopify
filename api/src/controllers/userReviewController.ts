import { Request, Response, NextFunction } from 'express'
import userReviewService from '../../src/services/userReviewService'
import UserReview from '../../src/models/UserReview'
import { BadRequestError } from '../../src/helpers/apiError'

// GET all userReviews
const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await userReviewService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET userReview by id
const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await userReviewService.findById(req.params.userReviewId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

//post userReview to database
const createUserReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { reviewerId, revieweeId, rating, comment } = req.body

    const userReview = new UserReview({
      reviewerId,
      revieweeId,
      rating,
      comment,
    })
    await userReviewService.createOne(userReview)
    res.json(userReview)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT userReview to database
const updateUserReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const userReviewId = req.params.userReviewId
    const updatedUserReview = await userReviewService.updateOne(
      userReviewId,
      update
    )
    res.json(updatedUserReview)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE userReview from database
const deleteUserReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await userReviewService.deleteOne(req.params.userReviewId)
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
  updateUserReview,
  deleteUserReview,
  createUserReview,
}
