const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Replace with your frontend URL
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Add this route to fix the 404 error
app.get("/home", (req, res) => {
  res.json({ message: "Welcome to SkillSwap!" });
});

// WebSocket connection
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("sendMessage", (data) => {
    io.emit("receiveMessage", data); // Broadcast to all clients
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
