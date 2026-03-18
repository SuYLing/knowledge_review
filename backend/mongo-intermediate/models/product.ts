import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  isStock: Boolean,
  tags: [String]
})
export type Product = mongoose.InferSchemaType<typeof ProductSchema>
export const ProductModel = mongoose.model('Product', ProductSchema)