// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route to handle GET requests to the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello');
});

// Start the Express server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
