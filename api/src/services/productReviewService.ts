import { NotFoundError } from '../helpers/apiError'
import ProductReview, { ProductReviewDocument } from '../models/ProductReview'

const createOne = async (productReview: ProductReviewDocument) => {
  return await productReview.save()
}

const findAll = async () => {
  return await ProductReview.find()
}

const findById = async (productId: string) => {
  const foundOne = await ProductReview.findById(productId)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

const updateOne = async (
  productId: string,
  update: Partial<ProductReviewDocument>
) => {
  const foundOne = await ProductReview.findByIdAndUpdate(productId, update)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

const deleteOne = async (productId: string) => {
  const foundOne = await ProductReview.findByIdAndDelete(productId)
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
