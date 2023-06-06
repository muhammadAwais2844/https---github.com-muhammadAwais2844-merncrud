const mongoose = require('mongoose');

const childTransactionSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  parentId: { type: Number, required: true },
  paidAmount: { type: Number, required: true },
});

const ChildTransaction = mongoose.model('ChildTransaction', childTransactionSchema);

module.exports = ChildTransaction;
