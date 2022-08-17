import mongoose, { Document, Schema } from 'mongoose'

export interface AddressDocument extends Document {
  streetname: string
  city: string
  country: string
  state: string
  postalcode: string
}

const AddressSchema = new Schema({
  streetname: {
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
  postalcode: {
    type: String,
    required: true,
  },
})

const Address = mongoose.model<AddressDocument>('Address', AddressSchema)
export default Address
