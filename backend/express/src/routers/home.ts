import { Router } from 'express'
const homeRouter: Router = Router()

homeRouter.get('/', (req, res) => {
	const name = req.query.name
	res.setHeader('content-type', 'text/plain;charset=utf8')
	res.end(`hello ${name}`)
})

homeRouter.post('/', (req, res) => {
	console.log(req.body)
	const body = req.body

	res.end(`hello post ${body.name}`)
})

export default homeRouter
