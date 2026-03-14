import express from 'express';
import "./configs/env.js";
import { connectToDB } from "./db/index.js";
import { loginRouter } from './routes/login.js';
import { registerRouter } from './routes/register.js';
connectToDB()
const app = express()
app.use(express.json())

app.use("/api/login", loginRouter)
app.use("/api/register", registerRouter)

const PORT = 3000
app.listen(PORT, () => {
	console.log('server on :3000')
})
