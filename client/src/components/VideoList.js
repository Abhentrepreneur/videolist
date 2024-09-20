import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoItem from './VideoItem';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/videos')
      .then(response => setVideos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Video List</h1>
      <div className="video-list">
        {videos.map(video => (
          <VideoItem key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
