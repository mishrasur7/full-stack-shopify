import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'

import { JWT_SECRET } from "../util/secrets"
import { ForbiddenError, NotFoundError } from "../helpers/apiError"
import User from "../models/User"

const authenticateUser =async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body
    const foundUser = await User.findOne({email: email})
    if(foundUser) {
        const passwordMatch = await foundUser.comparePassword(password)
        if(passwordMatch) {
            req.body = foundUser
            next()
        } else {
            throw new NotFoundError
        }
    }
}

const verifyAdmin = async(req: Request, res: Response, next: NextFunction) => {
    const user = new User(req.user)
    if(user.role === 'admin') {
        next()
    } else {
        throw new ForbiddenError
    }
}

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.body
    const decoded = jwt.verify(token, `${JWT_SECRET}`)
    if (decoded) {
      return res.json(decoded)
    } else {
      throw new NotFoundError()
    }
}

export default {
    authenticateUser,
    verifyAdmin,
    verifyToken
}