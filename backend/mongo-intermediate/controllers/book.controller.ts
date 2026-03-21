import type { Handler } from "express";
import { AuthorModel } from "../models/author.js";
import { BookModel } from "../models/book.js";

export const createBook: Handler = async (req, res) => {
  try {
    const { title, author } = req.body
    const newBook = await BookModel.create({
      author,
      title
    })
    if (newBook) {
      return res.status(201).json({
        success: true,
        message: 'book created successfully',
        data: newBook
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'something went wrong! Please try again',
    })
  }
}
export const createAuthor: Handler = async (req, res) => {
  try {
    const { name, bio } = req.body
    const newAuthor = await AuthorModel.create({
      name, bio
    })
    if (newAuthor) {
      return res.status(201).json({
        success: true,
        message: 'author created successfully',
        data: newAuthor
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'something went wrong! Please try again',
    })
  }
}

export const getBookWithAuthor: Handler = async (req, res) => {
  try {
    const id: string = req.params.id as string
    const book = await BookModel.findById(id).populate('author')
    if (book) {
      return res.status(200).json({
        success: true,
        message: 'books fetched successfully',
        data: book
      })
    } else {
      return res.status(404).json({
        success: false,
        message: 'book not found',
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'something went wrong! Please try again',
    })
  }
}

export const getAllBooks: Handler = async (req, res) => {
  try {
    const books = await BookModel.find({})
    res.status(200).json({
      success: true,
      message: 'books fetched successfully',
      data: books
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'something went wrong! Please try again',
    })
  }
}