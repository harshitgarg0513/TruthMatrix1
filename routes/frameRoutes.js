const express = require('express');
const Frame = require('../models/frameModel');
const router = express.Router();

router.post('/uploadFrame', async (req, res) => {
  try {
    const { frame } = req.body;
    
    // Save the base64 frame in MongoDB
    const newFrame = new Frame({ frameData: frame });
    await newFrame.save();

    res.json({ message: 'Frame saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving frame', error });
  }
});

module.exports = router;
