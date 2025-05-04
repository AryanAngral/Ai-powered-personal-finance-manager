import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css'

function DashboardPage() {
  // Mock data for demonstration purposes
  const accountBalance = 12500.75;
  const monthlyIncome = 5000;
  const monthlyExpenses = 3200;
  const savings = 1800;
  
  const recentTransactions = [
    { id: 1, date: '2025-05-02', description: 'Grocery Store', amount: -125.45, category: 'Food' },
    { id: 2, date: '2025-05-01', description: 'Salary Deposit', amount: 2500.00, category: 'Income' },
    { id: 3, date: '2025-04-30', description: 'Electric Bill', amount: -85.20, category: 'Utilities' },
    { id: 4, date: '2025-04-29', description: 'Restaurant', amount: -45.80, category: 'Dining' },
  ];
  
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/budget">Budget</Link>
          <Link to="/investment">Investments</Link>
          <Link to="/tax">Tax Planning</Link>
        </nav>
      </header>
      
      <main className="dashboard-main">
        <section className="account-summary">
          <h2>Account Summary</h2>
          <div className="balance-card">
            <h3>Current Balance</h3>
            <p className="balance">${accountBalance.toFixed(2)}</p>
          </div>
          
          <div className="financial-overview">
            <div className="financial-card">
              <h3>Monthly Income</h3>
              <p>${monthlyIncome.toFixed(2)}</p>
            </div>
            <div className="financial-card">
              <h3>Monthly Expenses</h3>
              <p>${monthlyExpenses.toFixed(2)}</p>
            </div>
            <div className="financial-card">
              <h3>Savings</h3>
              <p>${savings.toFixed(2)}</p>
            </div>
          </div>
        </section>
        
        <section className="recent-transactions">
          <h2>Recent Transactions</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.category}</td>
                  <td className={transaction.amount >= 0 ? 'income' : 'expense'}>
                    ${Math.abs(transaction.amount).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
      
      <footer className="dashboard-footer">
        <p>&copy; 2025 Spndr - Your Financial Companion</p>
      </footer>
    </div>
  );
}

export default DashboardPage;