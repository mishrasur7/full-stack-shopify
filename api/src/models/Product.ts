import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export interface ProductDocument extends Document {
  title: string
  price: number
  sellerId: ObjectId
  productImage: string[]
  categories: ObjectId[]
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
  productImage: [
    {
      type: String,
      required: false,
    },
  ],
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
})

const Product = mongoose.model<ProductDocument>(
  'Product',
  ProductDocumentSchema
)
export default Product
