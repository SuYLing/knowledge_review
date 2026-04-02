import { addBook, deleteBook, getBooks, updateBook } from "../services/book.service.js"

export const addBookHandle = async (req, res) => {
  try {
    const { title, publishedDate, authorId } = req.body
    const newBook = await addBook(title, publishedDate, authorId)
    res.status(201).json({
      message: "get books successful ~",
      data: newBook
    })
  } catch (error) {
    res.status(500).json({
      messgae: "something get error: " + error.message
    })
  }
}

export const deleteBookHandle = async (req, res) => {
  try {
    const { id } = req.params
    const deletedBook = await deleteBook(id)
    res.status(200).json({
      message: "delete books successful ~",
      data: deletedBook
    })
  } catch (error) {
    res.status(500).json({
      messgae: "something get error: " + error.message
    })
  }
}

export const updateBookHandle = async (req, res) => {
  try {
    const { id, title } = req.body
    const updatedBook = await updateBook(id, title)
    res.status(200).json({
      message: "update book successful ~",
      data: updatedBook
    })
  } catch (error) {
    res.status(500).json({
      messgae: "something get error: " + error.message
    })
  }
}

export const getBooksHandle = async (req, res) => {
  try {
    const books = await getBooks()
    res.status(200).json({
      data: !books || !books.length ? [] : books,
      messgae: "get books successful ~"
    })
  } catch (error) {
    res.status(500).json({
      messgae: "get books error" + error.message
    })
  }
}
