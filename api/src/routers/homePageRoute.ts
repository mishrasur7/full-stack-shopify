import express from 'express'
import { Request, Response } from 'express'

const router = express.Router()

const api = {
  product: {
    schema: {
      title: 'string',
      price: 'number',
      sellerId: 'string',
      productImage: 'string[]',
      categories: 'string[]',
    },
    getAllProducts: {
      method: 'get',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/products',
    },
    addProduct: {
      method: 'post',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/products',
    },
    updateProduct: {
      method: 'put',
      endpoint:
        'https://vast-wave-18172.herokuapp.com/api/v1/products/:productId',
    },
    deleteProduct: {
      method: 'delete',
      endpoint:
        'https://vast-wave-18172.herokuapp.com/api/v1/products/productId',
    },
    getProductById: {
      method: 'get',
      endpoint:
        'https://vast-wave-18172.herokuapp.com/api/v1/products/productId',
    },
  },
  address: {
    schema: {
      streetname: 'string',
      city: 'string',
      country: 'string',
      state: 'string',
      postalcode: 'string',
    },
    getAllAddresses: {
      method: 'get',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/addresses',
    },
    addAddress: {
      method: 'post',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/address',
    },
    updateAddress: {
      method: 'put',
      endpoint:
        'https://vast-wave-18172.herokuapp.com/api/v1/addresses/addressId',
    },
    deleteAddress: {
      method: 'delete',
      endpoint:
        'https://vast-wave-18172.herokuapp.com/api/v1/addresses/addressId',
    },
    getAddressById: {
      method: 'get',
      endpoint:
        'https://vast-wave-18172.herokuapp.com/api/v1/addresses/addressId',
    },
  },
  productreview: {
    schema: {
      reviewerId: 'string',
      productId: 'string',
      rating: '1|2|3|4|5',
      comment: 'string',
    },
    getAllProductreviews: {
      method: 'get',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/productreviews',
    },
    addProductReview: {
      method: 'post',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/productreviews',
    },
    updateProductReview: {
      method: 'put',
      endpoint:
        'https://vast-wave-18172.herokuapp.com/api/v1/productreviews/productReviewId',
    },
    deleteProductReview: {
      method: 'delete',
      endpoint:
        'https://vast-wave-18172.herokuapp.com/api/v1/productreviews/productReviewId',
    },
    getProductReviewById: {
      method: 'get',
      endpoint:
        'https://vast-wave-18172.herokuapp.com/api/v1/productreviews/productReviewId',
    },
  },
  user: {
    schema: {
      firstname: 'string',
      lastname: 'string',
      username: 'string',
      email: 'string',
      password: 'string',
      address: 'string',
      phonenumber: 'string',
      role: 'buyer | seller | admin',
    },
    getAllUsers: {
      method: 'get',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/users',
    },
    addUser: {
      method: 'post',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/users',
    },
    updateUser: {
      method: 'put',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/users/userId',
    },
    deleteUser: {
      method: 'delete',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/users/userId',
    },
    getUserById: {
      method: 'get',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/users/userId',
    },
  },
  userreview: {
    schema: {
      reviewerId: 'string',
      revieweeId: 'string',
      rating: '1|2|3|4|5',
      comment: 'string',
    },
    getAllUserreviews: {
      method: 'get',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/userreviews',
    },
    addUserReview: {
      method: 'post',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/userreviews',
    },
    updateUserReview: {
      method: 'put',
      endpoint:
        'https://vast-wave-18172.herokuapp.com/api/v1/userreviews/userReviewId',
    },
    deleteUserReview: {
      method: 'delete',
      endpoint:
        'https://vast-wave-18172.herokuapp.com/api/v1/userreviews/userReviewId',
    },
    getUserReviewById: {
      method: 'get',
      endpoint:
        'https://vast-wave-18172.herokuapp.com/api/v1/userreviews/userReviewId',
    },
  },
  category: {
    schema: {
      name: 'string',
      categoryImage: 'string',
    },
    getAllCategories: {
      method: 'get',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/categories',
    },
    addCategory: {
      method: 'post',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/categories',
    },
    updateCategory: {
      method: 'put',
      endpoint:
        'https://vast-wave-18172.herokuapp.com/api/v1/categories/categoryId',
    },
    deleteCategory: {
      method: 'delete',
      endpoint:
        'https://vast-wave-18172.herokuapp.com/api/v1/categories/categoryId',
    },
    getCategoryById: {
      method: 'get',
      endpoint:
        'https://vast-wave-18172.herokuapp.com/api/v1/categories/categoryId',
    },
  },
  cart: {
    model: {
      userid: 'string',
      products: [
        {
          quantity: 'number',
          productid: 'string',
        },
      ],
      deliveryaddress: 'string',
      status: 'Paid|Unpaid',
    },
    getAllCarts: {
      method: 'get',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/carts',
    },
    addCart: {
      method: 'post',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/cart',
    },
    updateCart: {
      method: 'put',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/carts/cartId',
    },
    deleteCart: {
      method: 'delete',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/carts/cartId',
    },
    getCartById: {
      method: 'get',
      endpoint: 'https://vast-wave-18172.herokuapp.com/api/v1/cartss/cartId',
    },
  },
}

router.get('', (req: Request, res: Response) => {
  res.json(api)
})

export default router
