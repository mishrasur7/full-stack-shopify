import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import userService from '../../src/services/userService'
import User from '../../src/models/User'
import { BadRequestError } from '../../src/helpers/apiError'
import { JWT_SECRET } from '../util/secrets'

// GET all users
const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await userService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET user by id
const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await userService.findById(req.params.userId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

//post user to database
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      address,
      phonenumber,
      role,
    } = req.body

    const user = new User({
      firstname,
      lastname,
      username,
      email,
      password,
      address,
      phonenumber,
      role,
    })
    await userService.createOne(user)
    res.json(user)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT user to database
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const update = req.body
    const userId = req.params.userId
    const updatedUser = await userService.updateOne(userId, update)
    res.json(updatedUser)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE user from database
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await userService.deleteOne(req.params.userId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

//returns token after user login
const userLogin = async (req: Request, res: Response) => {
  const token = jwt.sign(JSON.stringify(req.body), `${JWT_SECRET}`, {
    algorithm: 'HS256',
  })
  return res.json(token)
}

export default {
  findAll,
  findById,
  updateUser,
  deleteUser,
  createUser,
  userLogin,
}
