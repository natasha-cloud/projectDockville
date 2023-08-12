const express = require('express');
const router = express.Router();
const User = require('../../models/user'); // Assuming the path to your User model is correct

// POST /api/users/register
router.post('/register', async (req, res) => {
  const { name, password } = req.body;

  try {
    if (!name || !password) {
      return res.status(400).json({ error: 'Name and password are required' });
    }

    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists, login instead' });
    }

    const newUser = new User({ name, password });
    await newUser.save();

    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Sorry, something went wrong' });
  }
});

module.exports = router;
