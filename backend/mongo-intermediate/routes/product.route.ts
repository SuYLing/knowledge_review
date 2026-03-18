import express, { type Router } from "express";
import { getAllProducts, insertProducts } from "../controllers/product.controller.js";

export const productRouter: Router = express.Router()
productRouter.post("/add", insertProducts)
productRouter.get("/all", getAllProducts)