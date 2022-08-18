import { NotFoundError } from '../helpers/apiError'
import Cart, { CartDocument } from '../models/Cart'

const createOne = async (cart: CartDocument) => {
  return await cart.save()
}

const findAll = async () => {
  return await Cart.find()
}

const findById = async (cartId: string) => {
  const foundOne = await Cart.findById(cartId)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

const updateOne = async (cartId: string, update: Partial<CartDocument>) => {
  const foundOne = await Cart.findByIdAndUpdate(cartId, update)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

const deleteOne = async (cartId: string) => {
  const foundOne = await Cart.findByIdAndDelete(cartId)
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
