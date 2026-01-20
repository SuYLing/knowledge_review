import cors from 'cors'
import express from 'express'
import './configs/env.js'
import { connectToDB } from './db/index.js'
import { RouterLogger } from './middlewares/route-logger.js'
import bookRouter from './routes/book.route.js'
//#region 环境变量区域
const PORT = process.env.PORT || 3000
//#endregion
//#region 数据库区域
connectToDB()
//#endregion

const app = express()
app.use(cors())
app.use(express.json())
app.use(RouterLogger)
app.use('/api/books', bookRouter)

app.listen(PORT, () => {
	console.log('server on :3000')
})

