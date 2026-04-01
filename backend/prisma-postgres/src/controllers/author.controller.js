import { addAuthor } from "../services/author.service.js"
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