import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  }
})
export type Book = mongoose.InferSchemaType<typeof BookSchema>
export const BookModel = mongoose.model('Book', BookSchema)