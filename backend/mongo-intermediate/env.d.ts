declare namespace NodeJS {
  interface ProcessEnv {
    // http
    PORT: number
    // mongo
    MONGO_URL: string
    MONGO_PSW: string
    MONGO_USER: string
  }
}