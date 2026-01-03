import { Router } from 'express'
const productRouter: Router = Router()

productRouter.get('/:id', (req, res) => {
	const name = req.params.id
	console.log(name)
	res.setHeader('content-type', 'text/plain;charset=utf8')
	res.end(`hello ${name}`)
})

productRouter.post('/', (req, res) => {
	console.log(req.body)
	const body = req.body

	res.end(`hello post ${body.name}`)
})

export default productRouter

