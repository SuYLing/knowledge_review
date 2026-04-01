import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export const addBook = async (title, publishedDate, authorId) => {
  try {
    const newBook = await prisma.book.create({
      data: {
        title,
        publishedDate,
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