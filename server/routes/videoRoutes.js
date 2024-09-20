const express = require('express');
const { addVideo, getVideos } = require('../controllers/videoController');
const router = express.Router();

router.post('/add', addVideo);
router.get('/', getVideos);

module.exports = router;
