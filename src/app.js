const express = require('express');
const app = express();

// GET route for retrieving user information by userId
// Endpoint: /user/:userId
app.get('/user/:userId', (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({
      error: 'Invalid request. userId is missing.',
    });
  }

  res.status(200).json({
    userId: userId,
  });
});

module.exports = app;
