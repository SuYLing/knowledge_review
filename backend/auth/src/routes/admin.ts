import express, { type Router } from "express"
import { adminMiddleware } from "../middlewares/admin.middleware.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

export const adminRouter: Router = express.Router()
adminRouter.get('/', authMiddleware, adminMiddleware, (req, res) => {
  res.send('welcome to the admin page')
})