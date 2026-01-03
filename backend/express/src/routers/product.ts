import { Router } from 'express'
const productRouter: Router = Router()
const prods = [
	{
		id: 1,
		name: '衣服',
	},
	{
		id: 2,
		name: '裤子',
	},
	{
		id: 3,
		name: '帽子',
	},
]
productRouter.get('/:id', (req, res) => {
	try {
		const id = parseInt(req.params.id)
		res.writeHead(200, {
			'content-type': 'application/json',
		})
		res.end(JSON.stringify(prods.filter((p) => p.id === id)))
	} catch (error) {
		console.log(error)
		res.end(`something wrong`)
	}
})

productRouter.post('/', (req, res) => {
	console.log(req.body)
	const body = req.body

	res.end(`hello post ${body.name}`)
})

export default productRouter

