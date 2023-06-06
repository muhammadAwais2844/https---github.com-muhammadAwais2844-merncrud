const mongoose = require('mongoose');

const parentTransactionSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  totalAmount: { type: Number, required: true },
});

parentTransactionSchema.virtual('totalPaidAmount').get(function () {
  const childTransactions = this.childTransactions;
  if (!childTransactions) {
    return 0;
  }
  return childTransactions.reduce((total, childTransaction) => {
    return total + childTransaction.paidAmount;
  }, 0);
});

const ParentTransaction = mongoose.model('ParentTransaction', parentTransactionSchema);

module.exports = ParentTransaction;
