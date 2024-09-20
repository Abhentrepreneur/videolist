import React, { useState } from 'react';
import axios from 'axios';

const UploadVideo = () => {
    const [title, setTitle] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');  // Assuming token is stored in localStorage after login

        try {
            await axios.post('http://localhost:5000/api/videos/add', {
                title, videoUrl, thumbnailUrl
            }, {
                headers: { Authorization: token }
            });
            alert('Video uploaded successfully!');
        } catch (error) {
            console.error('Error uploading video:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Video URL" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} required />
            <input type="text" placeholder="Thumbnail URL" value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} required />
            <button type="submit">Upload Video</button>
        </form>
    );
};

export default UploadVideo;
