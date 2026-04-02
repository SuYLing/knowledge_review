import { prisma } from "../libs/prisma.js"
export const addAuthor = async (name) => {
  try {
    const newAuthor = await prisma.author.create({
      data: {
        name
      }
    })
    return newAuthor
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const deleteAuthor = async (id) => {
  try {
    const deletedAuthor = await prisma.author.delete({
      where: {
        id
      }
    })
    return deletedAuthor
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getAuthors = async () => {
  try {
    const authors = await prisma.author.findMany({
      include: {
        books: true
      }
    })
    return authors
  } catch (error) {
    throw error
  }
}