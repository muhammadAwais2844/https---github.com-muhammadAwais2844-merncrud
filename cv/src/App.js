import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [parentTransactions, setParentTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchParentTransactions();
  }, [currentPage]);

  const fetchParentTransactions = async () => {
    try {
      const response = await axios.get('/api/parent-transactions', {
        params: { page: currentPage },
      });
      const { parentTransactions, totalPages } = response.data;
      setParentTransactions(parentTransactions);
      setTotalPages(totalPages);
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };

  const handleTotalPaidAmountClick = (parentId) => {
    window.location.href = `/child-transactions/${parentId}`;
  };

  return (
    <div>
      <h1>Parent Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Total Amount</th>
            <th>Total Paid Amount</th>
          </tr>
        </thead>
        <tbody>
          {parentTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.sender}</td>
              <td>{transaction.receiver}</td>
              <td>{transaction.totalAmount}</td>
              <td>
                {transaction.totalPaidAmount}
                <button onClick={() => handleTotalPaidAmountClick(transaction.id)}>
                  View Child Transactions
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
