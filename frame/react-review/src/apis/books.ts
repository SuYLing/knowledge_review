import type { Books } from '../types/apis/books'
import type { Response } from '../types/apis/request'

export const getBooks = async () => {
  try {
    const res: Response.SuccessRespose<Books.BookInfo[]> = await (
      await fetch('http://127.0.0.1:3000/api/books/get')
    ).json()
    return res
  } catch (error) {
    throw error
  }
}

