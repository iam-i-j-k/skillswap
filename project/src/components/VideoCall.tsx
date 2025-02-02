import { useEffect, useRef, useState } from "react";
import Peer from "peerjs";

const VideoCall = () => {
  const [peerId, setPeerId] = useState("");
  const [remotePeerId, setRemotePeerId] = useState("");
  const peerRef = useRef<Peer | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
  const localVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Initialize Peer
     const peer = new Peer(undefined, {
      host: "peerjs-server.herokuapp.com", // Public PeerJS server
      secure: true,
      port: 443,
      path: "/"
    });
    peerRef.current = peer;

    peer.on("open", (id) => {
      setPeerId(id);
      console.log("My Peer ID:", id);
    });

    peer.on("call", (call) => {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
        localVideoRef.current!.srcObject = stream;
        call.answer(stream);
        call.on("stream", (remoteStream) => {
          remoteVideoRef.current!.srcObject = remoteStream;
        });
      });
    });

    return () => {
      peer.destroy();
    };
  }, []);

  const startCall = () => {
    const peer = peerRef.current!;
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      localVideoRef.current!.srcObject = stream;
      const call = peer.call(remotePeerId, stream);
      call.on("stream", (remoteStream) => {
        remoteVideoRef.current!.srcObject = remoteStream;
      });
    });
  };

  return (
    <div>
      <h2>Video Call</h2>
      <p>Your ID: {peerId}</p>
      <input
        type="text"
        placeholder="Enter peer ID"
        value={remotePeerId}
        onChange={(e) => setRemotePeerId(e.target.value)}
      />
      <button onClick={startCall}>Call</button>

      <div className="video-container">
        <video ref={localVideoRef} autoPlay playsInline muted />
        <video ref={remoteVideoRef} autoPlay playsInline />
      </div>
    </div>
  );
};

export default VideoCall;
