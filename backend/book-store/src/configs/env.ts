import dotenv from 'dotenv'
import path from 'node:path'
const mode = process.env.MODE
const envPath = path.resolve(process.cwd(), `.${mode}.env`)

dotenv.config({
	path: envPath,
})

