import { Request, Response, NextFunction } from 'express'

import { BadRequestError } from '../helpers/apiError'
import imageService from '../services/imageServices'

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(await imageService.getAllImages())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

const findOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(await imageService.getSingleImage(req.params.imageId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

const createOne = async (req: Request, res: Response, next: NextFunction) => {}

export default {
  findAll,
  findOne,
  createOne,
}
