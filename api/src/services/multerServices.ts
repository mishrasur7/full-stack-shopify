import multer from 'multer'

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

//reads image data from form input and stores in storage

//product image
const uploadProductImage = multer({ storage }).single('productImage')

//category image
const uploadCategoryImage = multer({ storage }).single('categoryImage')

export default {
  uploadProductImage,
  uploadCategoryImage,
}
