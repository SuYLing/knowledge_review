import express, { type Router } from "express";
import { createAuthor, createBook, getAllBooks, getBookWithAuthor } from "../controllers/book.controller.js";

export const bookRouter: Router = express.Router()
bookRouter.post("/add-author", createAuthor)
bookRouter.post("/add-book", createBook)
bookRouter.get("/get/book/:id", getBookWithAuthor)
bookRouter.get("/get/books", getAllBooks)
