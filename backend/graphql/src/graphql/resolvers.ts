import type { Resolvers } from "../generated/graphql"
import { Product } from "../models/product"


export const resolvers: Resolvers = {
  Query: {
    products: async () => await Product.find({}),
    product: async (_, { id }) => {
      const products = await Product.find({})
      const product = products.find((p) => p.id === id)
      return product ?? null
    }
  },
  // Mutation: {
  //   createProduct: (_, { name, category, price }) => {
  //     const newProduct = {
  //       id: String(products.length + 1),
  //       name,
  //       category,
  //       price
  //     }
  //     products.push(newProduct)
  //     return newProduct
  //   },
  //   deleteProduct(_, { id }) {
  //     const index = products.findIndex((p) => p.id === id)
  //     if (index === -1) return false
  //     products.splice(index, 1)
  //     return true
  //   },
  //   updateProduct(_, { id, ...updates }) {
  //     const index = products.findIndex((p) => p.id === id)
  //     if (index === -1) return null
  //     const newProduct = {
  //       ...products[index],
  //       ...updates
  //     }
  //     products[index] = newProduct
  //     return newProduct
  //   }
  // }
  Mutation: {
    async createProduct(_, product) {
      const newProduct = await Product.create(product)
      return newProduct
    },
    async deleteProduct(_, { id }) {
      const product = await Product.findByIdAndDelete(id)
      return product !== null
    },
    async updateProduct(_, { id, ...updates }) {
      const product = await Product.findByIdAndUpdate(id, updates, { new: true })
      return product
    }
  }
}
