import mongoose, { Document, ObjectId, Schema } from 'mongoose'
import bcrypt from 'bcrypt'

type Role = 'buyer' | 'seller' | 'admin'

export interface UserDocument extends Document {
  firstname: string
  lastname: string
  username: string
  email: string
  password: string
  address: ObjectId
  phonenumber: string
  role: Role
  comparePassword(password: string): Promise<boolean>
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
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: 'Address',
  },
  phonenumber: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['buyer', 'seller', 'admin'],
  },
})

UserSchema.pre<UserDocument>(
  'save',
  { document: true, query: false },
  async function (next) {
    if (this.isModified('password') || this.isNew) {
      try {
        this.password = await bcrypt.hash(this.password, 10)
        return next()
      } catch (e:any) {
        return next(e)
      }
    }
  }
)

UserSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password)
}

const User = mongoose.model<UserDocument>('User', UserSchema)
export default User
