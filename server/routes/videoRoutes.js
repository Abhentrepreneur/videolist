const express = require('express');
const { getAllVideos, addVideo } = require('../controllers/videoController');
const auth = require('../middlewares/auth');  // JWT Middleware to protect routes
const router = express.Router();

router.get('/', getAllVideos);  // Public route to get all videos
router.post('/add', auth, addVideo);  // Protected route to add video

module.exports = router;
