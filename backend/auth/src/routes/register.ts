import express, { type Router } from 'express'
import { registerUser } from '../controllers/register.controller.js'
export const registerRouter: Router = express.Router()

registerRouter.post('/', registerUser)