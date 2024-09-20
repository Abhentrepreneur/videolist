const Video = require('../models/Video');

exports.addVideo = async (req, res) => {
    const { title, videoUrl, thumbnailUrl } = req.body;
    try {
        const newVideo = new Video({ title, videoUrl, thumbnailUrl });
        await newVideo.save();
        res.status(201).json(newVideo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to upload video' });
    }
};

exports.getVideos = async (req, res) => {
    try {
        const videos = await Video.find();
        res.json(videos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch videos' });
    }
};
