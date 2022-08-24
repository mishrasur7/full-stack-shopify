import mongoose, { Document, Schema } from 'mongoose'

export interface CategoryDocument extends Document {
  name: string
  categoryImage: string
}

const CategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  categoryImage: {
    type: String,
    required: false,
  },
})

const Category = mongoose.model<CategoryDocument>('Category', CategorySchema)
export default Category
