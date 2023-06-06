const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const parentTransactionRoutes = require('./routes/parentTransactionRoutes');
const childTransactionRoutes = require('./routes/childTransactionRoutes');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/transactiondb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/parent-transactions', parentTransactionRoutes);
app.use('/api/child-transactions', childTransactionRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
