import express, { type Router } from "express";
import { createAuthor } from "../controllers/book.controller.js";

export const bookRouter: Router = express.Router()
bookRouter.post("/add", createAuthor)