const Video = require('../models/Video');

exports.getAllVideos = async (req, res) => {
    try {
        const videos = await Video.find();
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.addVideo = async (req, res) => {
    const { title, videoUrl, thumbnailUrl } = req.body;
    try {
        const newVideo = new Video({ title, videoUrl, thumbnailUrl, uploadedBy: req.user._id });
        await newVideo.save();
        res.status(201).json(newVideo);
    } catch (error) {
        res.status(500).json({ message: 'Error uploading video' });
    }
};
