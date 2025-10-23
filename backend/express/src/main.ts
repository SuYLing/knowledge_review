import express from 'express'
import homeRouter from './routers/home.js'
const app = express()

app.use(express.json())
// Home router
app.use(homeRouter)

const PROT = 8080
app.listen(PROT, (err) => {
	if (err) {
		console.log(`server error: ${err}`)
		return
	}
	console.log(`server on: http://localhost:${8080}`)
})
