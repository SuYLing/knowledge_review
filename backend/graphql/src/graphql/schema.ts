import { gql } from "graphql-tag";
export const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    category: String!
    price: Float!
  }

  type Query {
    products: [Product!]
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(name: String!, category: String!, price: Float!): Product
    deleteProduct(id: ID!): Boolean
    updateProduct(id: ID!, name: String!, category: String!, price: Float!): Product
  }

`