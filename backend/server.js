const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://skillswap-1-tn5u.onrender.com"], // Allowed origins
  methods: ["GET", "POST"], // Allowed request methods
  credentials: true // Allow cookies, authentication headers

  }
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Handling messages
  socket.on("sendMessage", (data) => {
    io.emit("receiveMessage", data); // Broadcast message to all clients
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(5000, () => console.log('Server running on port 5000'));
