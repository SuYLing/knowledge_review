import { products } from "../data/products"
export const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find((p) => p.id === id)
  },
  Mutation: {
    createProduct: (_, { name, category, price }) => {
      const newProduct = {
        id: String(products.length + 1),
        name,
        category,
        price
      }
      products.push(newProduct)
      return newProduct
    },
    deleteProduct(_, { id }) {
      const index = products.findIndex((p) => p.id === id)
      if (index === -1) return false
      products.splice(index, 1)
      return true
    },
    updateProduct(_, { id, ...updates }) {
      const index = products.findIndex((p) => p.id === id)
      if (index === -1) return null
      const newProduct = {
        ...products[index],
        ...updates
      }
      products[index] = newProduct
      return newProduct
    }
  }
}
