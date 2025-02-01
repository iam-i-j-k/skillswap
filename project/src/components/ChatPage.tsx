import React from 'react';
import { useParams } from 'react-router-dom';
import Chat from './Chat';

const ChatPage = () => {
  const { userId } = useParams<{ userId: string }>();

  return (
    <div className="chat-page">
      <h2>Chat with User ID: {userId}</h2>
      {/* Implement chat and video call functionality here */}
      <div>
        <Chat />
      </div>
      
    </div>
  );
};

export default ChatPage;