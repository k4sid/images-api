const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve image when the API endpoint is hit
app.get('/image', (req, res) => {
  // Specify the image path
  const imagePath = path.join(__dirname, 'images', 'example.jpg'); // Ensure you have the image in the 'images' folder

  // Set the proper headers and send the image
  res.sendFile(imagePath, (err) => {
    if (err) {
      console.error('Error while sending the image:', err);
      res.status(500).send('Server Error');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
