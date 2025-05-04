import React from 'react';
import './transaction.css'

const TransactionList = ({ transactions, title, viewAllLink }) => {
  return (
    <div className="transactions-container">
      <div className="transactions-header">
        <h3 className="transactions-title">{title}</h3>
        {viewAllLink && <a href={viewAllLink} className="view-all">View All</a>}
      </div>
      <ul className="transaction-list">
        {transactions.map((transaction, index) => (
          <li key={index} className="transaction-item">
            <div className="transaction-info">
              <div className="transaction-icon">{transaction.icon}</div>
              <div className="transaction-details">
                <h4>{transaction.title}</h4>
                <p>{transaction.date}</p>
              </div>
            </div>
            <div className={`transaction-amount ${transaction.type}`}>{transaction.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;