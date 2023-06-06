const express = require('express');
const router = express.Router();
const ParentTransaction = require('../models/ParentTransaction');

// GET /api/parent-transactions
// Fetch parent transactions with pagination and sorting
router.get('/', async (req, res) => {
  try {
    const { page = 1, pageSize = 2, sortField = 'id', sortOrder = 1 } = req.query;

    const sortOptions = { [sortField]: sortOrder };

    const totalItems = await ParentTransaction.countDocuments();
    const totalPages = Math.ceil(totalItems / pageSize);
    const skip = (page - 1) * pageSize;

    const parentTransactions = await ParentTransaction.find()
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(pageSize));

    res.json({ parentTransactions, totalPages });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET /api/parent-transactions/:parentId/child-transactions
// Fetch child transactions for a specific parent transaction
router.get('/:parentId/child-transactions', async (req, res) => {
  try {
    const { parentId } = req.params;

    const childTransactions = await ChildTransaction.find({ parentId });

    res.json(childTransactions);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
