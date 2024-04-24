const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/freelance_clients', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
}).catch(err => console.log(err));

// Define Schema
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  projectDescription: String,
  budget: String,
  deadline: String
});

// Define Model
const Form = mongoose.model('Form', formSchema);

// API Endpoint to handle form submission
app.post('/api/form', async (req, res) => {
  const formData = req.body;

  try {
    const createdForm = await Form.create(formData);
    console.log("Data saved to database");
    res.status(200).send("Data saved successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving to database");
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
