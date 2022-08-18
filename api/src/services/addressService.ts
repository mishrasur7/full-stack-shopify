import { NotFoundError } from '../helpers/apiError'
import Address, { AddressDocument } from '../models/Address'

const createOne = async (address: AddressDocument) => {
  return await address.save()
}

const findAll = async () => {
  return await Address.find()
}

const findById = async (addressId: string) => {
  const foundOne = await Address.findById(addressId)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

const updateOne = async (
  addressId: string,
  update: Partial<AddressDocument>
) => {
  const foundOne = await Address.findByIdAndUpdate(addressId, update)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

const deleteOne = async (addressId: string) => {
  const foundOne = await Address.findByIdAndDelete(addressId)
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
