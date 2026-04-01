import express from "express"
import { addAuthorHandle } from "../controllers/author.controller.js"
export const authorRouter = express.Router()
authorRouter.post("/add", addAuthorHandle)