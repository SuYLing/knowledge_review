import express from 'express'
import { TimeLoggerMiddleware } from './middlewares/timeLogger.middleware.js'
import homeRouter from './routers/home.js'
import productRouter from './routers/product.js'
const app = express()

app.use(express.json())
// Home router
app.use(homeRouter)
app.use(TimeLoggerMiddleware)
app.use('/product', productRouter)
const PROT = 3000
app.listen(PROT, (err) => {
	if (err) {
		console.log(`server error: ${err}`)
		return
	}
	console.log(`server on: http://localhost:${8080}`)
})

