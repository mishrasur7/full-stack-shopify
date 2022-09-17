import { MONGODB_URI } from '../util/secrets'

const mongoUrl = MONGODB_URI

export const dbConfig = {
  url: mongoUrl,
  database: 'Shopify',
  imgBucket: 'Image',
}
