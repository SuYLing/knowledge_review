import express from "express"
import "./configs/env"
const app = express()


const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server on: ${PORT}`)
})