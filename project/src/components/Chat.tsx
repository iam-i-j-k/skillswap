import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("https://skillswap-znrx.onrender.com"); // Replace with your backend URL

interface Message {
  sender: string;
  text: string;
  timestamp: string;
}

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [username, setUsername] = useState("User"); // Replace with actual username logic

  useEffect(() => {
    socket.on("receiveMessage", (data: Message) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage: Message = {
        sender: username,
        text: message,
        timestamp: new Date().toLocaleTimeString(),
      };
      socket.emit("sendMessage", newMessage);
      setMessages((prev) => [...prev, newMessage]);
      setMessage("");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Chat Room</h2>
      <div className="border p-3 h-60 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <div className="text-sm text-gray-500">
              {msg.sender} at {msg.timestamp}
            </div>
            <div className="text-md">{msg.text}</div>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="mt-4 flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 flex-grow rounded-l-lg"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
