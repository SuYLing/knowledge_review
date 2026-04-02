import { addAuthor, deleteAuthor, getAuthors } from "../services/author.service.js"
export const addAuthorHandle = async (req, res) => {
  try {
    const { name } = req.body
    const author = await addAuthor(name)
    res.status(201).json({
      data: author,
      message: "create author successful"
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

export const getAuthorsHandle = async (req, res) => {
  try {
    const authors = await getAuthors()
    res.status(200).json({
      data: authors,
      message: "get authors successful"
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

export const deleteAuthorHandle = async (req, res) => {
  try {
    const id = +req.params.id
    const deletedAuthor = await deleteAuthor(id)
    res.status(200).json({
      data: deletedAuthor,
      message: "delete author successful"
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}