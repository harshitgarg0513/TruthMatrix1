const mongoose = require('mongoose');
const frameSchema = new mongoose.Schema({
  frameData: { type: String, required: true },  // Base64 format
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Frame', frameSchema);
