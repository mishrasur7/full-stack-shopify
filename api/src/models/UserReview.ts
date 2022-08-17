import mongoose, { Document, ObjectId, Schema } from 'mongoose'

//custom type for rating
type Rating = 1 | 2 | 3 | 4 | 5

export interface UserReviewDocument extends Document {
  reviewerId: ObjectId
  revieweeId: ObjectId
  rating: Rating
  comment: string
}

const UserReviewSchema = new Schema({
  reviewerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  revieweeId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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

const UserReview = mongoose.model<UserReviewDocument>(
  'UserReview',
  UserReviewSchema
)

export default UserReview
