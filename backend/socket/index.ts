import express from "express";
import http from 'node:http';
import { Server } from "socket.io";
const app = express()

app.use(express.json())
app.use(express.static("./public"))


const server = http.createServer(app)

const io = new Server(server)
server.listen(3000, () => console.log('server on 3000'))
const users = new Set()
io.on('connection', (socket) => {
  console.log('a user connected');
  // 加入用户
  socket.on("join", (username) => {
    console.log(username)
    users.add(username)
    socket.emit("joined", Array.from(users).filter(user => user !== username))

  })

});