import express, { type Router } from 'express'
import {
	createBook,
	deleteBook,
	getAllBooks,
	getBookById,
	updateBook,
} from '../controllers/book.controller.js'
const bookRouter: Router = express.Router()
bookRouter.get('/get', getAllBooks)
bookRouter.get('/get/:id', getBookById)
bookRouter.post('/add', createBook)
bookRouter.put('/update/:id', updateBook)
bookRouter.delete('/delete/:id', deleteBook)

export default bookRouter

