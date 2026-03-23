import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import { connectToDB } from './db';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/schema';
// 应用环境变量
dotenv.config()
async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
  const { url } = await startStandaloneServer(server, {
    listen: {
      port: process.env.PORT ? Number(process.env.PORT) : 3000
    }
  })
  console.log(`server on: ${url}`)
}
connectToDB()

startServer()