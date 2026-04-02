import express from "express"
import "./configs/env.js"
import { authorRouter } from "./routes/author.route.js"
import { bookRouter } from "./routes/book.route.js"

const app = express()
app.use(express.json())
app.use("/api/author", authorRouter)
app.use("/api/books", bookRouter)



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`)
})
