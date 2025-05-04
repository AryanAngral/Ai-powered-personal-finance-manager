import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './investment.css'

function InvestmentPage() {
  // Mock data for demonstration purposes
  const [investments, setInvestments] = useState([
    { id: 1, name: 'S&P 500 ETF', amount: 10000, returns: 8.5, category: 'ETF' },
    { id: 2, name: 'Tech Growth Fund', amount: 5000, returns: 12.3, category: 'Mutual Fund' },
    { id: 3, name: 'Corporate Bond Fund', amount: 7500, returns: 4.2, category: 'Bonds' },
    { id: 4, name: 'Real Estate REIT', amount: 3000, returns: 6.7, category: 'REIT' },
    { id: 5, name: 'Blue Chip Stock Portfolio', amount: 8000, returns: 7.9, category: 'Stocks' }
  ]);

  const [newInvestment, setNewInvestment] = useState({
    name: '',
    amount: '',
    returns: '',
    category: 'ETF'
  });

  const totalInvested = investments.reduce((sum, inv) => sum + inv.amount, 0);
  const projectedAnnualReturn = investments.reduce((sum, inv) => sum + (inv.amount * inv.returns / 100), 0);
  
  const handleAddInvestment = (e) => {
    e.preventDefault();
    if (newInvestment.name && newInvestment.amount && newInvestment.returns) {
      const newId = investments.length > 0 ? Math.max(...investments.map(inv => inv.id)) + 1 : 1;
      setInvestments([
        ...investments,
        {
          id: newId,
          name: newInvestment.name,
          amount: parseFloat(newInvestment.amount),
          returns: parseFloat(newInvestment.returns),
          category: newInvestment.category
        }
      ]);
      setNewInvestment({
        name: '',
        amount: '',
        returns: '',
        category: 'ETF'
      });
    }
  };

  return (
    <div className="investment-container">
      <header className="investment-header">
        <h1>Investment Portfolio</h1>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/budget">Budget</Link>
          <Link to="/tax">Tax Planning</Link>
        </nav>
      </header>
      
      <main className="investment-main">
        <section className="investment-summary">
          <h2>Portfolio Summary</h2>
          <div className="summary-cards">
            <div className="summary-card">
              <h3>Total Invested</h3>
              <p>${totalInvested.toFixed(2)}</p>
            </div>
            <div className="summary-card">
              <h3>Projected Annual Return</h3>
              <p>${projectedAnnualReturn.toFixed(2)}</p>
              <p className="return-percentage">
                ({(projectedAnnualReturn / totalInvested * 100).toFixed(2)}%)
              </p>
            </div>
          </div>
        </section>
        
        <section className="investment-allocation">
          <h2>Asset Allocation</h2>
          <div className="allocation-chart">
            {/* This would be a chart in a real application */}
            <div className="placeholder-chart">
              <div className="chart-segment segment-1" style={{width: '35%'}}>ETFs</div>
              <div className="chart-segment segment-2" style={{width: '20%'}}>Mutual Funds</div>
              <div className="chart-segment segment-3" style={{width: '25%'}}>Bonds</div>
              <div className="chart-segment segment-4" style={{width: '10%'}}>REITs</div>
              <div className="chart-segment segment-5" style={{width: '10%'}}>Stocks</div>
            </div>
          </div>
        </section>
        
        <section className="investment-list">
          <h2>Your Investments</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Expected Return</th>
                <th>Annual Yield</th>
              </tr>
            </thead>
            <tbody>
              {investments.map(investment => (
                <tr key={investment.id}>
                  <td>{investment.name}</td>
                  <td>{investment.category}</td>
                  <td>${investment.amount.toFixed(2)}</td>
                  <td>{investment.returns}%</td>
                  <td>${(investment.amount * investment.returns / 100).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        
        <section className="add-investment">
          <h2>Add New Investment</h2>
          <form onSubmit={handleAddInvestment}>
            <div className="form-group">
              <label htmlFor="investment-name">Investment Name:</label>
              <input 
                type="text" 
                id="investment-name" 
                value={newInvestment.name}
                onChange={(e) => setNewInvestment({...newInvestment, name: e.target.value})}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="investment-category">Category:</label>
              <select 
                id="investment-category"
                value={newInvestment.category}
                onChange={(e) => setNewInvestment({...newInvestment, category: e.target.value})}
              >
                <option value="ETF">ETF</option>
                <option value="Mutual Fund">Mutual Fund</option>
                <option value="Bonds">Bonds</option>
                <option value="REIT">REIT</option>
                <option value="Stocks">Stocks</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="investment-amount">Amount ($):</label>
              <input 
                type="number" 
                id="investment-amount" 
                min="0" 
                step="0.01"
                value={newInvestment.amount}
                onChange={(e) => setNewInvestment({...newInvestment, amount: e.target.value})}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="expected-return">Expected Annual Return (%):</label>
              <input 
                type="number" 
                id="expected-return" 
                min="0" 
                step="0.1"
                value={newInvestment.returns}
                onChange={(e) => setNewInvestment({...newInvestment, returns: e.target.value})}
                required
              />
            </div>
            
            <button type="submit" className="btn">Add Investment</button>
          </form>
        </section>
      </main>
      
      <footer className="investment-footer">
        <p>&copy; 2025 Spndr - Your Financial Companion</p>
      </footer>
    </div>
  );
}

export default InvestmentPage;