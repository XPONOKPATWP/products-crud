// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product.route');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/productsDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use(productRoutes);  // Προσθήκη των routes προϊόντων

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
