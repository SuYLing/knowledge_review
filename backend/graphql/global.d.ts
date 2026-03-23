declare namespace NodeJS {
  interface ProcessEnv {
    MONGO_URL: string
    MONGO_PSW: string
    MONGO_USER: string
    PORT: string
    JWT_SECRET_KEY: string
    CLOUDINARY_CLOUD_NAME: string
    CLOUDINARY_API_KEY: string
    CLOUDINARY_API_SECRET: string
  }
}