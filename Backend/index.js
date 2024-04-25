const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API Endpoint to handle form submission
app.post('/api/form', (req, res) => {
  const formData = req.body;
  
  // Log the form data to the console
  console.log(formData);

  res.status(200).send("Form data received successfully");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
