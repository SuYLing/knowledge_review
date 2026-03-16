import express, { type Router } from "express";
import { changePassword } from "../controllers/change-password.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
export const changePasswordRouter: Router = express.Router()

changePasswordRouter.post('/', authMiddleware ,changePassword)