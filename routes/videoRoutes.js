// const express = require('express');
// const Video = require('../models/videoModel');
// const router = express.Router();

// // Route to handle video upload
// router.post('/uploadVideo', async (req, res) => {
//   try {
//     const { video } = req.body;

//     // Save the Base64 video in MongoDB
//     const newVideo = new Video({ videoData: video });
//     await newVideo.save();

//     res.json({ message: 'Video saved successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error saving video', error });
//   }
// });

// module.exports = router;
