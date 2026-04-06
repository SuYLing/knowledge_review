declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string
    PORT: string
    NODE_ENV: string
    JWT_SECRET: string
  }
}
