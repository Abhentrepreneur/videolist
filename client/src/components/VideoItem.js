import React from "react";

const VideoItem = ({ video }) => (
  <div class Name="video-item">
    {" "}
    <h2>{video.title}</h2> <img src={video.thumbnailUrl} alt={video.title} />{" "}
    <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
      Watch Video
    </a>
  </div>
);
export default VideoItem;
