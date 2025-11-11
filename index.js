// index.js
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all origins
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files
app.use(express.static('public'));

// Basic route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint for timestamp
app.get('/api/:date?', (req, res) => {
  const dateParam = req.params.date;
  let date;

  // Handle empty date parameter - return current time
  if (!dateParam) {
    date = new Date();
    return res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  }

  // Check if the date parameter is a Unix timestamp (all digits)
  if (/^\d+$/.test(dateParam)) {
    // Parse as Unix timestamp (in milliseconds)
    date = new Date(parseInt(dateParam));
  } else {
    // Parse as date string
    date = new Date(dateParam);
  }

  // Check if date is valid
  if (date.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  // Return the response with unix timestamp and UTC string
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

// Listen on port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}`);
});
