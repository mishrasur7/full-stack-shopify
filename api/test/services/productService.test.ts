import { MongodHelper } from '../../test/db-helper'
import connect from '../../test/db-helper'
import Product from '../../src/models/Product'
import {
  product1,
  product2,
  product3,
  product4,
} from '../../test/fixutes/products'
import productService from '../../src/services/productService'

let mongoHelper: MongodHelper

beforeAll(async () => {
  mongoHelper = await connect()
})

beforeEach(async () => {
  await Product.insertMany([product1, product2, product3, product4])
})

afterEach(async () => {
  await mongoHelper.clearDatabase()
})

afterAll(async () => {
  await mongoHelper.closeDatabase()
})

describe('test product service', () => {
  test('should find all with pagination and sorting', async () => {
    const products = await productService.findAll(0, 3, 'price')
    expect(products.length).toBe(3)
    expect(products[0].title).toEqual(product1.title)
    expect(products[2].price).toEqual(product2.price)
  })
})
