import express from "express"
import "./configs/env.js"
import { connectToDB } from "./db/index.js"
import { bookRouter } from "./routes/book.route.js"
import { productRouter } from "./routes/product.route.js"
connectToDB()

const app = express()

app.use(express.json())

app.use("/api/product", productRouter)
app.use("/api/book", bookRouter)
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server on: ${PORT}`)
})