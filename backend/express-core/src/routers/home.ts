import express, { type Router } from "express";

export const homeRouter: Router = express.Router()
homeRouter.get("/", (req, res) => {
  res.end("hello express")
})