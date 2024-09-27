const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const frameRoutes = require('./routes/frameRoutes');

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());

mongoose.connect('mongodb+srv://harshit78872:Vbz8UHF2ZE0Ep7Y3@cluster0.fahibk8.mongodb.net/ytextract', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/', frameRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
