import mongoose, { Document, Schema } from 'mongoose'

export interface AddressDocument extends Document {
  streetName: string
  city: string
  country: string
  state: string
  postalCode: string
}

const AddressSchema = new Schema({
  streetName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
})

const Address = mongoose.model<AddressDocument>('Address', AddressSchema)
export default Address
