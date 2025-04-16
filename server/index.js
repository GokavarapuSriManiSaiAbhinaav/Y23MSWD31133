const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes
const ProductsRoutes = require('./Routes/ProductsRoutes');
const AuthRoutes = require('./Routes/AuthRoutes'); // ✅ Import Auth Routes

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api', ProductsRoutes);
app.use('/api/auth', AuthRoutes); // ✅ Mount the Auth Routes

const PORT = process.env.PORT || 6662;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
