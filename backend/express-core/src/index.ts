import cors from "cors"
import express from "express"
const app = express()

app.use(cors())
app.use(express.json())

// 服务监听
const PROT = process.env.PROT || 3000
app.listen(PROT, () => {
  console.log(`server on http://localhost:${PROT}`)
})