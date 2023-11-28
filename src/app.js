const express = require('express');
const app = express();

// GET route for retrieving user information by userId
// Endpoint: /user/:userId
app.get('/user/:userId', (req, res) => {
  // Extract userId from route parameters
  const { userId } = req.params;

  // Check if userId is present
  if (!userId) {
    return res.status(400).json({
      error: 'Invalid request. userId is missing.',
    });
  }

  // Return the userId in the response with the expected format
  res.status(200).json({
    userId: userId,
  });
});

module.exports = app;
