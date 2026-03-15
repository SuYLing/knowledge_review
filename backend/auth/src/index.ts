import express from 'express';
import "./configs/env.js";
import { connectToDB } from "./db/index.js";
import { adminRouter } from './routes/admin.js';
import { homeRouter } from './routes/home.js';
import { imageRouter } from './routes/image.js';
import { loginRouter } from './routes/login.js';
import { registerRouter } from './routes/register.js';
connectToDB()
const app = express()
app.use(express.json())

app.use("/api/login", loginRouter)
app.use("/api/register", registerRouter)
app.use("/api/home", homeRouter)
app.use("/api/admin", adminRouter)

app.use("/api/image", imageRouter)

const PORT = 3000
app.listen(PORT, () => {
	console.log('server on :3000')
})
