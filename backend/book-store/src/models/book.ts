import mongoose from 'mongoose'
const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Book title is required'],
		trim: true,
		maxLength: [100, 'The maximum length of title is 100.'],
	},
	author: {
		type: String,
		required: [true, 'Book author is required'],
		trim: true,
		maxLength: [100, 'The maximum length of title is 100.'],
	},
	year: {
		type: Number,
		required: [true, 'Publication year is required'],
		min: [1000, 'Year must be at least 1000'],
		max: [new Date().getFullYear(), 'Year can not be in the future'],
	},
	createAt: {
		type: Date,
		default: Date.now,
	},
})

export const BookModel = mongoose.model('Book', bookSchema)

