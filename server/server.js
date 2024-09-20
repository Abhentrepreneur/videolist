const express = require('express');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const videoRoutes = require('./routes/videoRoutes');

// Initialize the app
const app = express();
app.use(express.json());
app.use(cors());  // Enable CORS for frontend-backend communication

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

// Initialize Passport (Google OAuth)
// require('./services/googleAuth');
// app.use(passport.initialize());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/videos', videoRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
