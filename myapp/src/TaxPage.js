import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tax.css'

function TaxPage() {
  const [income, setIncome] = useState(75000);
  const [deductions, setDeductions] = useState([
    { id: 1, name: '401(k) Contributions', amount: 6000 },
    { id: 2, name: 'Health Insurance Premiums', amount: 3600 },
    { id: 3, name: 'Mortgage Interest', amount: 5000 },
    { id: 4, name: 'Charitable Donations', amount: 1200 }
  ]);
  
  const [newDeduction, setNewDeduction] = useState({
    name: '',
    amount: ''
  });
  
  // Simple tax brackets for demonstration (2024 US single filer)
  const taxBrackets = [
    { rate: 0.10, threshold: 0 },
    { rate: 0.12, threshold: 11000 },
    { rate: 0.22, threshold: 44725 },
    { rate: 0.24, threshold: 95375 },
    { rate: 0.32, threshold: 182100 },
    { rate: 0.35, threshold: 231250 },
    { rate: 0.37, threshold: 578125 }
  ];
  
  const totalDeductions = deductions.reduce((sum, deduction) => sum + deduction.amount, 0);
  const taxableIncome = Math.max(0, income - totalDeductions);
  
  // Calculate tax amount
  const calculateTax = (taxableIncome) => {
    let tax = 0;
    let remainingIncome = taxableIncome;
    
    for (let i = 0; i < taxBrackets.length; i++) {
      const currentBracket = taxBrackets[i];
      const nextBracketThreshold = i < taxBrackets.length - 1 ? taxBrackets[i + 1].threshold : Infinity;
      const taxableInThisBracket = Math.min(
        remainingIncome,
        nextBracketThreshold - currentBracket.threshold
      );
      
      if (taxableInThisBracket <= 0) break;
      
      tax += taxableInThisBracket * currentBracket.rate;
      remainingIncome -= taxableInThisBracket;
    }
    
    return tax;
  };
  
  const estimatedTax = calculateTax(taxableIncome);
  const effectiveTaxRate = (estimatedTax / taxableIncome * 100) || 0;
  
  const handleAddDeduction = (e) => {
    e.preventDefault();
    if (newDeduction.name && newDeduction.amount) {
      const newId = deductions.length > 0 ? Math.max(...deductions.map(d => d.id)) + 1 : 1;
      setDeductions([
        ...deductions,
        {
          id: newId,
          name: newDeduction.name,
          amount: parseFloat(newDeduction.amount)
        }
      ]);
      setNewDeduction({
        name: '',
        amount: ''
      });
    }
  };
  
  return (
    <div className="tax-container">
      <header className="tax-header">
        <h1>Tax Planning</h1>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/budget">Budget</Link>
          <Link to="/investment">Investments</Link>
        </nav>
      </header>
      
      <main className="tax-main">
        <section className="tax-calculator">
          <h2>Tax Estimator</h2>
          
          <div className="input-section">
            <label htmlFor="income">Annual Income ($):</label>
            <input 
              type="number" 
              id="income" 
              value={income}
              onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
              min="0" 
              step="1000"
            />
          </div>
          
          <div className="tax-summary">
            <div className="summary-card">
              <h3>Gross Income</h3>
              <p>${income.toFixed(2)}</p>
            </div>
            <div className="summary-card">
              <h3>Total Deductions</h3>
              <p>${totalDeductions.toFixed(2)}</p>
            </div>
            <div className="summary-card">
              <h3>Taxable Income</h3>
              <p>${taxableIncome.toFixed(2)}</p>
            </div>
            <div className="summary-card">
              <h3>Estimated Tax</h3>
              <p>${estimatedTax.toFixed(2)}</p>
              <p className="tax-rate">({effectiveTaxRate.toFixed(2)}% effective rate)</p>
            </div>
          </div>
        </section>
        
        <section className="deductions">
          <h2>Tax Deductions</h2>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {deductions.map(deduction => (
                <tr key={deduction.id}>
                  <td>{deduction.name}</td>
                  <td>${deduction.amount.toFixed(2)}</td>
                  <td>
                    <button 
                      className="btn-small delete"
                      onClick={() => setDeductions(deductions.filter(d => d.id !== deduction.id))}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <form className="add-deduction-form" onSubmit={handleAddDeduction}>
            <h3>Add New Deduction</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="deduction-name">Description:</label>
                <input 
                  type="text" 
                  id="deduction-name" 
                  value={newDeduction.name}
                  onChange={(e) => setNewDeduction({...newDeduction, name: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="deduction-amount">Amount ($):</label>
                <input 
                  type="number" 
                  id="deduction-amount" 
                  min="0" 
                  step="100"
                  value={newDeduction.amount}
                  onChange={(e) => setNewDeduction({...newDeduction, amount: e.target.value})}
                  required
                />
              </div>
              
              <button type="submit" className="btn">Add Deduction</button>
            </div>
          </form>
        </section>
        
        <section className="tax-optimization">
          <h2>Tax Optimization Tips</h2>
          <div className="tips-container">
            <div className="tip-card">
              <h3>Retirement Accounts</h3>
              <p>Maximize your 401(k) or IRA contributions to reduce taxable income.</p>
            </div>
            <div className="tip-card">
              <h3>Health Savings Account</h3>
              <p>Contribute to an HSA for triple tax benefits if you have a high-deductible health plan.</p>
            </div>
            <div className="tip-card">
              <h3>Tax-Loss Harvesting</h3>
              <p>Consider selling investments that have lost value to offset capital gains.</p>
            </div>
            <div className="tip-card">
              <h3>Charitable Giving</h3>
              <p>Donate to qualified charities to receive tax deductions.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="tax-footer">
        <p>&copy; 2025 Spndr - Your Financial Companion</p>
      </footer>
    </div>
  );
}

export default TaxPage;