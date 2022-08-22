import express from 'express'
// import lusca from 'lusca' will be used later
import dotenv from 'dotenv'

import productRoute from './routers/productRoute'
import addressRoute from './routers/addressRoute'
import userReviewRoute from './routers/userReviewRoute'

import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'

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

// Custom API error handler
app.use(apiErrorHandler)

export default app
