import type { Handler } from "express";
import { ImageModel } from "../models/image.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";

export const uploadImage: Handler = async (req, res) => {
  console.log(req.file)
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'no file uploaded'
      })
    }
    const { publicId, url } = await uploadToCloudinary(req.file.path)
    const newImage = await ImageModel.create({
      publicId,
      url,
      uploadedBy: req?.user?.id || ''
    })
    res.status(201).json({
      success: true,
      message: 'image uploaded successfully',
      data: newImage
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'something went wrong! Please try again',
    })
  }
}