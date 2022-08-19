import { ObjectId } from "mongodb"

import Product from "../../src/models/Product"
import { user1, user2, user3 } from "./users"

export const product1 = new Product({
    title: 'Iphone10',
    price: 1000,
    sellerId: user1._id,
    images: [new ObjectId()],
    categories: new ObjectId(),
    reviews: [new ObjectId()]
})

export const product2 = new Product({
    title: 'Iphone11',
    price: 2000,
    sellerId: user2._id,
    images: new ObjectId(),
    categories: new ObjectId(),
    reviews: new ObjectId()
})

export const product3 = new Product({
    title: 'Iphone12',
    price: 3000,
    sellerId: user3._id,
    images: new ObjectId(),
    categories: new ObjectId(),
    reviews: new ObjectId()
})

export const product4 = new Product({
    title: 'Iphone10',
    price: 1100,
    sellerId: user1._id,
    images: new ObjectId(),
    categories: new ObjectId(),
    reviews: new ObjectId()
})