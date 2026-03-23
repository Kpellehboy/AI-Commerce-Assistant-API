const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER
exports.register = async (req, res) => {
  const { email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hashed
  });

  res.json({ message: "User registered" });
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign({ id: user._id }, "secret123", { expiresIn: "1d" });

  res.json({ token });
};