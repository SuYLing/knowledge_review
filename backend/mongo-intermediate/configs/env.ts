import dotenv from 'dotenv'
import path from 'node:path'
const envPath = path.resolve(process.cwd(), `.env`)

dotenv.config({
  path: envPath,
})

