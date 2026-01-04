import express from 'express'
import './configs/env.js'
import { connectToDB } from './db/index.js'

//#region 环境变量区域
const PORT = process.env.PORT
//#endregion
//#region 数据库区域
connectToDB()
//#endregion

const app = express()

app.listen(PORT, () => {
	console.log('server on :3000')
})

