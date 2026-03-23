const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

const { handleChat } = require('../controllers/aiController');

router.post('/', handleChat);

module.exports = router;