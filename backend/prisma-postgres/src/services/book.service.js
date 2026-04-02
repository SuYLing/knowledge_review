import { prisma } from "../libs/prisma.js"
export const addBook = async (title, publishedDate, authorId) => {
  try {
    const newBook = await prisma.book.create({
      data: {
        title,
        publishedDate: new Date(publishedDate),
        author: {
          connect: {
            id: authorId
          }
        },
      },
      include: { author: true }
    })
    return newBook
  } catch (error) {
    console.log(error)
    throw error
  }
}
export const getBooks = async () => {
  try {
    const books = await prisma.book.findMany({
      include: {
        // 同时带出 author的信息
        author: true
      }
    })
    return !books || !books.length ? [] : books
  } catch (error) {
    throw error
  }
}
export const deleteBook = async (id) => {
  try {
    const newBook = await prisma.book.delete({
      where: {
        id
      }
    })
    return newBook
  } catch (error) {
    console.log(error)
    throw error
  }
}
export const updateBook = async (id, title) => {
  try {
    const result = await prisma.book.update({
      where: {
        id
      },
      data: {
        title
      }
    })
    return result
  } catch (error) {
    console.log(error)
    throw error
  }
}