import express from "express"
import { addBookHandle, deleteBookHandle, getBooksHandle, updateBookHandle } from "../controllers/book.controller.js"
export const bookRouter = express.Router()
bookRouter.post("/add", addBookHandle)
bookRouter.get("/get-books", getBooksHandle)
bookRouter.delete("/delete/:id", deleteBookHandle)
bookRouter.put("/update", updateBookHandle)