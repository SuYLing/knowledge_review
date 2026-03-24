import express from "express"
import { corsConfigure } from "./configs/cors"
import "./configs/env"
const app = express()

app.use(corsConfigure())
app.use(express.json())

// 服务监听
const PROT = process.env.PROT || 3000

app.listen(PROT, () => {
  console.log(`server on http://localhost:${PROT}`)
})