const { PeerServer } = require("peer");

const app = express();
const PORT = process.env.PORT || 9000; // Use Render's dynamic PORT

const peerServer = PeerServer({ path: "/" });

app.use("/peerjs", peerServer);

app.get("/", (req, res) => {
  res.send("PeerJS Server is running!");
});

app.listen(PORT, () => {
  console.log(`PeerJS server running on port ${PORT}`);
});
