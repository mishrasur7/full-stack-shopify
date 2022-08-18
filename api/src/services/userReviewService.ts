import { NotFoundError } from '../helpers/apiError'
import UserReview, { UserReviewDocument } from '../models/UserReview'

const createOne = async (userReview: UserReviewDocument) => {
  return await userReview.save()
}

const findAll = async () => {
  return await UserReview.find()
}

const findById = async (userId: string) => {
  const foundOne = await UserReview.findById(userId)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

const updateOne = async (
  userId: string,
  update: Partial<UserReviewDocument>
) => {
  const foundOne = await UserReview.findByIdAndUpdate(userId, update)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

const deleteOne = async (userId: string) => {
  const foundOne = await UserReview.findByIdAndDelete(userId)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

export default {
  createOne,
  findAll,
  findById,
  updateOne,
  deleteOne,
}
