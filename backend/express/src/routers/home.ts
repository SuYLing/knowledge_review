import { Router } from 'express'
const homeRouter: Router = Router()

homeRouter.get('/', (req, res) => {
	const name = req.query.name

	res.render('home', {
		title: '欢迎',
		name: '羽澪',
		hobbies: [
			{
				title: '篮球',
			},
			{
				title: '足球',
			},
			{
				title: '乒乓球',
			},
		],
	})
})

homeRouter.post('/', (req, res) => {
	console.log(req.body)
	const body = req.body

	res.end(`hello post ${body.name}`)
})

export default homeRouter

