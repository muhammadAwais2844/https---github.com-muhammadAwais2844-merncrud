const express = require('express');
const router = express.Router();
const ChildTransaction = require('../models/ChildTransaction');

// GET /api/child-transactions
// Fetch all child transactions
router.get('/', async (req, res) => {
  try {
    const childTransactions = await ChildTransaction.find();

    res.json(childTransactions);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
