import { Request, Response, NextFunction } from 'express'
import fs from 'fs'
import sharp from 'sharp'

import categoryService from '../services/categoryServices'
import { BadRequestError } from '../../src/helpers/apiError'
import Category from '../../src/models/Category'
import imageServices from '../services/imageServices'

// GET all categories
const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await categoryService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET category by id
const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await categoryService.findById(req.params.categoryId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

//post category to database
const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.file?.path) {
      const dataBuffer = fs.readFileSync(req.file.path)
      const data = await sharp(dataBuffer).resize(200, 200).toBuffer()
      const image = await imageServices.createImage(data)
      const categoryImage = `${image._id}`
      const { name } = req.body
      const category = new Category({
        name,
        categoryImage,
      })
      const newCategory = await categoryService.createOne(category)
      res.json(newCategory)
    }
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT category to database
const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const categoryId = req.params.categoryId
    const updatedCategory = await categoryService.updateOne(categoryId, update)
    res.json(updatedCategory)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE category from database
const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await categoryService.deleteOne(req.params.categoryId)
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
  updateCategory,
  deleteCategory,
  createCategory,
}
