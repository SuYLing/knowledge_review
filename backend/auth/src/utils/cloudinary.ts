import cloudinary from "../configs/cloudinary.js";

export const uploadToCloudinary = async (filePath: string) => {
  try {
    const result = await cloudinary.uploader.upload(filePath)
    return {
      publicId: result.public_id,
      url: result.url,
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}