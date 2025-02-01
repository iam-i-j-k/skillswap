import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCall from './VideoCall';

const VideoCallPage = () => {
  const { userId } = useParams<{ userId: string }>();

  return (
    <div className="video-call-page">
      <h2>Video Call with User ID: {userId}</h2>
      {/* Implement video call functionality here using WebRTC or a third-party service */}
      <div>
        <VideoCall />
      </div>
    </div>
  );
};

export default VideoCallPage;