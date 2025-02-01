import React from 'react';
import { useNavigate } from 'react-router-dom';

// Define the user type (adjust based on your data structure)
interface User {
  name: string;
  id: string;
}

// Define the props type for ChatModal
interface ChatModalProps {
  user: User;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ user, onClose }) => {
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate(`/chat/${user.id}`);
  };

  const handleVideoCallClick = () => {
    navigate(`/video-call/${user.id}`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Chat with {user.name}</h2>
        <button
          onClick={handleChatClick}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition w-full mb-4"
        >
          Chat with {user.name}
        </button>
        <button
          onClick={handleVideoCallClick}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition w-full mb-4"
        >
          Video Call with {user.name}
        </button>
        <button
          onClick={onClose}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ChatModal;
