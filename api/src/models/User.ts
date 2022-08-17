import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export interface UserDocument extends Document {
  firstname: string
  lastname: string
  username: string
  email: string
  password: string
  address: ObjectId[]
  reviews: ObjectId[]
}

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Address',
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'UserReview',
    },
  ],
})

const User = mongoose.model<UserDocument>('User', UserSchema)
export default User
