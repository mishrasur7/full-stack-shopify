import { NotFoundError } from '../helpers/apiError'
import Category, { CategoryDocument } from '../models/Category'

const createOne = async (category: CategoryDocument) => {
  return await category.save()
}

const findAll = async () => {
  return await Category.find()
}

const findById = async (categoryId: string) => {
  const foundOne = await Category.findById(categoryId)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

const updateOne = async (
  categoryId: string,
  update: Partial<CategoryDocument>
) => {
  const foundOne = await Category.findByIdAndUpdate(categoryId, update)
  if (foundOne) {
    return foundOne
  } else {
    throw new NotFoundError()
  }
}

const deleteOne = async (categoryId: string) => {
  const foundOne = await Category.findByIdAndDelete(categoryId)
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
