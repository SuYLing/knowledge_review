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