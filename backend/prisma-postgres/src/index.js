import dotnev from "dotenv"
import express from "express"
import { authorRouter } from "./routes/author.route.js"

dotnev.config()
const app = express()
app.use(express.json())
app.use("/api/author", authorRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`)
})
