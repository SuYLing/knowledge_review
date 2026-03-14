import express, { type Router } from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'
export const homeRouter: Router = express.Router()

homeRouter.get('/', authMiddleware, (req, res) => {
  res.send('welcome to the home page')
})