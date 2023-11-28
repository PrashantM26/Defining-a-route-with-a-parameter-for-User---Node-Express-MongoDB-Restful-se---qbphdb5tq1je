const express = require('express');
const app = express();

app.get('', (req, res) => {
  //Write a code here for endpoint /user/:userId and also print parameter in json form
   const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({
      error: 'Invalid request. userId is missing.',
    });
  }

  res.status(200).json({
    userId,
  });
});

module.exports = app;
