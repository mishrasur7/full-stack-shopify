import Image, { ImageDocument } from '../models/Image'

const getSingleImage = async (
  imageId: string
): Promise<ImageDocument | null> => {
  const foundImage = await Image.findById(imageId)
  return foundImage
}

const getAllImages = async () => {
  const images = await Image.find()
  return images
}

const createImage = async (data: Buffer): Promise<ImageDocument> => {
  const foundImage = await Image.findOne({ data: data })
  if (foundImage) {
    return foundImage
  } else {
    const newImage = new Image({
      data: data,
    })
    return await newImage.save()
  }
}

export default {
  getSingleImage,
  getAllImages,
  createImage,
}
