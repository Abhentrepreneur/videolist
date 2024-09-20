const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h',  // Token expiration
  });
};

// Standard Login (assuming password-based login)
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Verify the password (you would need to implement password hashing in your User model)
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Create JWT token
    const token = generateToken(user);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: 'Login failed, please try again' });
  }
};

// Google OAuth Login
exports.googleLogin = async (req, res) => {
  const { tokenId } = req.body;

  try {
    // Verify the Google token with Google's OAuth service
    const ticket = await verifyGoogleToken(tokenId);  // You would need a helper function for this
    const { email, name, picture, sub } = ticket.payload;

    // Check if user already exists in database
    let user = await User.findOne({ email });
    if (!user) {
      // If user doesn't exist, create a new one
      user = new User({
        googleId: sub,
        email,
        name,
        avatar: picture,
      });
      await user.save();
    }

    // Generate JWT token for the user
    const token = generateToken(user);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: 'Google login failed, please try again' });
  }
};

// Helper function to verify Google OAuth token (you need to use Google OAuth libraries)
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const verifyGoogleToken = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  return ticket;
};
