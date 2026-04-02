import express from "express"
import { addAuthorHandle, deleteAuthorHandle, getAuthorsHandle } from "../controllers/author.controller.js"
export const authorRouter = express.Router()
authorRouter.post("/add", addAuthorHandle)
authorRouter.delete("/delete/:id", deleteAuthorHandle)
authorRouter.get("/get-authors", getAuthorsHandle)
