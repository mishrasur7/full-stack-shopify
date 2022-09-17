import multer from 'multer'
import { GridFsStorage } from 'multer-gridfs-storage'

import { dbConfig } from '../config/dbConfig'

const storage = new GridFsStorage({
  url: dbConfig.url + dbConfig.database,
  file: (req, file) => {
    const match = ['image/png', 'image/jpeg']

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-suraj-${file.originalname}`
      return filename
    }

    return {
      bucketName: dbConfig.imgBucket,
      filename: `${Date.now()}-suraj-${file.originalname}`,
    }
  },
})

//product image
const uploadProductImage = multer({ storage: storage }).single('productImage')

//category image
const uploadCategoryImage = multer({ storage: storage }).single('categoryImage')

export default {
  uploadProductImage,
  uploadCategoryImage,
}
