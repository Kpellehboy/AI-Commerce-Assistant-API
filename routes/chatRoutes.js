const express = require('express');
const router = express.Router();

const Chat = require('../models/Chat');

// GET all chat history
router.get('/', async (req, res) => {
  try {
    const chats = await Chat.find().sort({ createdAt: 1 });
    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;