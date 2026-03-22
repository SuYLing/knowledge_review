import express from "express";
import http from 'node:http';
import { Server } from "socket.io";
const app = express()

app.use(express.json())
app.use(express.static("./public"))


const server = http.createServer(app)

const io = new Server(server)
server.listen(3000, () => console.log('server on http://localhost:3000'))
const users = new Set()
io.on('connection', (socket) => {
  console.log('a user connected');
  // 加入用户
  socket.on("join", (username) => {
    users.add(username)
    socket.username = username
    io.emit("joined", username)
    io.emit("user-list", Array.from(users))
  })
  // 用户退出
  socket.on("leave", () => {
    console.log("socket.id", socket.username)
    users.delete(socket.username)
    io.emit("left", socket.username)
    io.emit("user-list", Array.from(users))
  })
  socket.on("chat message", (info) => {
    console.log(info)
    io.emit("chat message", info)
  })
});