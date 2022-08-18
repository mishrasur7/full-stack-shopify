import mongoose, { Document, ObjectId, Schema } from 'mongoose'

import { ProductDocument } from './Product'

//interface that extends ProductDocument interface to add quantity attribute
export interface ProductInCart extends ProductDocument {
  quantity: number
  productid: ObjectId
}

// type for payment status
type PaymentStatus = 'Paid' | 'Unpaid'

const ProductInCartSchema = new Schema<ProductInCart>({
  quantity: {
    type: Number,
    required: true,
  },
  productid: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
})

export interface CartDocument extends Document {
  userid: ObjectId
  products: ProductInCart[]
  deliveryaddress: ObjectId
  status: PaymentStatus
}

const CartSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [ProductInCartSchema],
  deliveryaddress: {
    type: Schema.Types.ObjectId,
    ref: 'Address',
    required: true,
  },
  status: {
    type: String,
    enum: ['paid', 'unpaid'],
    required: true,
  },
})

const Cart = mongoose.model<CartDocument>('Cart', CartSchema)
export default Cart
