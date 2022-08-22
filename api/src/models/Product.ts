import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export interface ProductDocument extends Document {
  title: string
  price: number
  sellerId: ObjectId
  images: string[]
  categories: ObjectId[]
  reviews: ObjectId[]
}

const ProductDocumentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ProductReview',
    },
  ],
})

const Product = mongoose.model<ProductDocument>(
  'Product',
  ProductDocumentSchema
)
export default Product
