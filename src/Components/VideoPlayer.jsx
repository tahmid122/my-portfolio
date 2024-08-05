import React from "react";
import { FaXmark } from "react-icons/fa6";
const VideoPlayer = ({ setIsTrue, video, name }) => {
  return (
    <div className="video-player">
      <h1>{name}</h1>
      <div className="video-div">
        <video src={video} controls></video>
      </div>
      <span
        className="player-close"
        onClick={() => {
          setIsTrue(false);
        }}
      >
        <FaXmark />
      </span>
    </div>
  );
};

export default VideoPlayer;
