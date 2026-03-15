import express, { type Router } from "express"
import { uploadImage } from "../controllers/image.controller.js"
import { adminMiddleware } from "../middlewares/admin.middleware.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"
import { uploadMiddleware } from "../middlewares/upload.middleware.js"
export const imageRouter: Router = express.Router()

imageRouter.post("/upload",
  authMiddleware,
  adminMiddleware,
  uploadMiddleware.single('image'),
  uploadImage)