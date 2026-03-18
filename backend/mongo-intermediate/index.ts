import express from "express"
import "./configs/env.js"
import { connectToDB } from "./db/index.js"
import { productRouter } from "./routes/product.route.js"
connectToDB()

const app = express()

app.use(express.json())

app.use("/api/product", productRouter)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server on: ${PORT}`)
})