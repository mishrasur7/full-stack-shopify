import mongoose, { Document, ObjectId, Schema } from 'mongoose'

//custom type for rating
type Rating = 1 | 2 | 3 | 4 | 5

export interface ProductReviewDocument extends Document {
  reviewerId: ObjectId
  productId: ObjectId
  rating: Rating
  comment: string
}

const ProductReviewSchema = new Schema({
  reviewerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: true,
  },
  comment: {
    type: String,
    required: false,
  },
})

const ProductReview = mongoose.model<ProductReviewDocument>(
  'ProductReview',
  ProductReviewSchema
)

export default ProductReview
