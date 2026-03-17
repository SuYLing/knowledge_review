import express from "express"
import "./configs/env.js"
import { connectToDB } from "./db/index.js"
connectToDB()

const app = express()


const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server on: ${PORT}`)
})