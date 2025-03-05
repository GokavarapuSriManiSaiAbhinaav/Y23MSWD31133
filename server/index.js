const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5001;

 // Load environment variables from .env file
 dotenv.config();

 // Connect to MongoDB
 mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('MongoDB connected...'))
   .catch(err => console.error('Failed to connect to MongoDB', err));

 // Basic route
 app.get('/', (req, res) => {
   res.send('Hello, DoorStep');
 });


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle GET requests to the root URL
app.get('/logo', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pixelcut.png'));
});

app.get('/video', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'proto.mp4'));
});

app.get('/pdf', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pedo.pdf'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});