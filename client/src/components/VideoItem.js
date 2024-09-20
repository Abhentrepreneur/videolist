import React from 'react';

const VideoItem = ({ video }) => {
    return (
        <div className="video-item">
            <img src={video.thumbnailUrl} alt={video.title} />
            <h2>{video.title}</h2>
            <a href={video.videoUrl}>Watch Video</a>
        </div>
    );
};

export default VideoItem;
