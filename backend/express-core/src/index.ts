import express from "express"
import { corsConfigure } from "./configs/cors"
import "./configs/env"
import { globalErrorHandler } from "./middlewares/error.middleware"
import { requestLogger } from "./middlewares/logger.middleware"
import { homeRouter } from "./routers/home"
const app = express()
// 使用一些三方中间件
app.use(corsConfigure())

app.use(express.json())

// 自定义中间件
app.use(requestLogger)
app.use(globalErrorHandler)
// 路由配置
app.use("/", homeRouter)

// 全局错误处理
app.use(globalErrorHandler)
// 服务监听
const PROT = process.env.PROT || 3000

app.listen(PROT, () => {
  console.log(`server on http://localhost:${PROT}`)
})