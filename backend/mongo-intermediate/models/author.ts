import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  name: String,
  bio: String
})
export type Author = mongoose.InferSchemaType<typeof AuthorSchema>
export const AuthorModel = mongoose.model('Author', AuthorSchema)