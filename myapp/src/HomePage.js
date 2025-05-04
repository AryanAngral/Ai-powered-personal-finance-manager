import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Spndr</h1>
        <h2>Your Personal Finance Manager</h2>
      </header>
      
      <main className="home-main">
        <p>Take control of your finances with Spndr. Track expenses, manage budgets, plan investments, and optimize taxes.</p>
        
        <div className="home-features">
          <div className="feature-card">
            <h3>Dashboard</h3>
            <p>View all your financial information at a glance</p>
            <Link to="/dashboard" className="btn">Go to Dashboard</Link>
          </div>
          
          <div className="feature-card">
            <h3>Budget</h3>
            <p>Create and manage your monthly budgets</p>
            <Link to="/budget" className="btn">Manage Budget</Link>
          </div>
          
          <div className="feature-card">
            <h3>Investments</h3>
            <p>Track and plan your investment portfolio</p>
            <Link to="/investment" className="btn">View Investments</Link>
          </div>
          
          <div className="feature-card">
            <h3>Tax Planning</h3>
            <p>Optimize your tax strategies</p>
            <Link to="/tax" className="btn">Tax Planning</Link>
          </div>
        </div>
      </main>
      
      <footer className="home-footer">
        <p>&copy; 2025 Spndr - Your Financial Companion</p>
      </footer>
    </div>
  );
}

export default HomePage;