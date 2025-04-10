const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const ProductsRoutes = require('./Routes/ProductsRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


app.use('/api', ProductsRoutes);


const PORT = process.env.PORT || 6662;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});