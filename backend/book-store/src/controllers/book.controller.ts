import type { Handler } from 'express'
import { BookModel } from '../models/book.js'
export const getAllBooks: Handler = async (req, res) => {
	try {
		const books = await BookModel.find({})
		if (books.length > 0) {
			res.status(200).json({
				success: true,
				message: 'get all books success',
				data: books,
			})
		} else {
			res.status(404).json({
				success: false,
				message: 'no books',
			})
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'something went wrong! Please try again',
		})
	}
}
export const getBookById: Handler = async (req, res) => {
	try {
		const bookId = req.params.id
		const book = await BookModel.findById(bookId)
		if (book) {
			console.log(book)
			res.status(200).json({
				success: true,
				message: 'get book success',
				data: book,
			})
		} else {
			res.status(404).json({
				success: false,
				message: 'this books is not found!',
			})
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'something went wrong! Please try again',
		})
	}
}
export const updateBook: Handler = async (req, res) => {
	try {
		const id = req.params.id
		const updateBookFormData = req.body
		const updatedBook = await BookModel.findByIdAndUpdate(id, updateBookFormData, {
			new: true,
		})
		if (updatedBook) {
			res.status(200).json({
			success: true,
			data: updatedBook,
		})
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'something went wrong! Please try again',
		})
	}
}
export const deleteBook: Handler = async (req, res) => {
	try {
		const id = req.params.id
		const deleteBook = await BookModel.findByIdAndDelete(id)
		if (!deleteBook) {
			res.status(404).json({
				success: false,
				message: 'not found',
			})
		} else {
			res.status(200).json({
				success: true,
				data: deleteBook,
			})
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'something went wrong! Please try again',
		})
	}
}
export const createBook: Handler = async (req, res) => {
	try {
		const newBookFormData = req.body
		const newlyCreatedBook = await BookModel.create(newBookFormData)
		if (newlyCreatedBook) {
			res.status(201).json({
				success: true,
				message: 'Book added successfully',
				data: newlyCreatedBook,
			})
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'something went wrong! Please try again',
		})
	}
}

