import { NotFoundError } from '../helpers/apiError'
import Product, { ProductDocument } from '../models/Product'

const createOne = async (productReview: ProductDocument) => {
  return await productReview.save()
}

const findAll = async (page: number, limit: number, sort: string) => {
  return await Product.find()
    .sort({ [sort]: 1 })
    .limit(limit)
    .skip(page * limit)
}

const findById = async (productId: string) => {
  const foundOne = await Product.findById(productId)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

const updateOne = async (
  productId: string,
  update: Partial<ProductDocument>
) => {
  const foundOne = await Product.findByIdAndUpdate(productId, update)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

const deleteOne = async (productId: string) => {
  const foundOne = await Product.findByIdAndDelete(productId)
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
