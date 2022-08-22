import express from 'express'
// import lusca from 'lusca' will be used later
import dotenv from 'dotenv'

import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import productRoute from './routers/productRoute'
import addressRoute from './routers/addressRoute'
import userReviewRoute from './routers/userReviewRoute'
import userRoute from './routers/userRoute'
import productReviewRoute from './routers/productReviewRoute'
import categoryRoute from './routers/categoryRoute'
import cartRoute from './routers/cartRoute'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)

// Global middleware
app.use(apiContentType)
app.use(express.json())

// Set up routers
app.use('/api/v1/products', productRoute)
app.use('/api/v1/addresses', addressRoute)
app.use('/api/v1/userreviews', userReviewRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/productreviews', productReviewRoute)
app.use('/api/v1/categories', categoryRoute)
app.use('/api/v1/carts', cartRoute)

// Custom API error handler
app.use(apiErrorHandler)

export default app
