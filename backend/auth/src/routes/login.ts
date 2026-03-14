import express, { type Router } from 'express'
import { loginUser } from '../controllers/login.controller.js'
export const loginRouter: Router = express.Router()

loginRouter.post('/', loginUser)