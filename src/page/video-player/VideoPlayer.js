import React from "react";
import ReactPlayer from "react-player";
const VideoPlayer = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ReactPlayer
        muted
        controls
        url="https://www.youtube.com/watch?v=dayGL0mYRnU"
      />
    </div>
  );
};

export default VideoPlayer;
