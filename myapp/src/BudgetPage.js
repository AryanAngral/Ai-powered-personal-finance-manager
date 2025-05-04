import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './budget.css'

function BudgetPage() {
  // Mock data for demonstration purposes
  const [budgetCategories, setBudgetCategories] = useState([
    { id: 1, name: 'Housing', budgeted: 1200, actual: 1150 },
    { id: 2, name: 'Groceries', budgeted: 400, actual: 385 },
    { id: 3, name: 'Transportation', budgeted: 300, actual: 275 },
    { id: 4, name: 'Utilities', budgeted: 200, actual: 210 },
    { id: 5, name: 'Entertainment', budgeted: 150, actual: 180 },
    { id: 6, name: 'Dining Out', budgeted: 200, actual: 250 },
    { id: 7, name: 'Healthcare', budgeted: 100, actual: 50 },
    { id: 8, name: 'Savings', budgeted: 500, actual: 500 },
  ]);

  const [newCategory, setNewCategory] = useState('');
  const [newBudgetAmount, setNewBudgetAmount] = useState('');

  const totalBudgeted = budgetCategories.reduce((sum, category) => sum + category.budgeted, 0);
  const totalActual = budgetCategories.reduce((sum, category) => sum + category.actual, 0);
  
  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory && newBudgetAmount) {
      const newId = budgetCategories.length > 0 ? Math.max(...budgetCategories.map(cat => cat.id)) + 1 : 1;
      setBudgetCategories([
        ...budgetCategories,
        {
          id: newId,
          name: newCategory,
          budgeted: parseFloat(newBudgetAmount),
          actual: 0
        }
      ]);
      setNewCategory('');
      setNewBudgetAmount('');
    }
  };

  return (
    <div className="budget-container">
      <header className="budget-header">
        <h1>Budget Planner</h1>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/investment">Investments</Link>
          <Link to="/tax">Tax Planning</Link>
        </nav>
      </header>
      
      <main className="budget-main">
        <section className="budget-summary">
          <h2>Budget Summary</h2>
          <div className="summary-cards">
            <div className="summary-card">
              <h3>Total Budgeted</h3>
              <p>${totalBudgeted.toFixed(2)}</p>
            </div>
            <div className="summary-card">
              <h3>Total Spent</h3>
              <p>${totalActual.toFixed(2)}</p>
            </div>
            <div className="summary-card">
              <h3>Remaining</h3>
              <p>${(totalBudgeted - totalActual).toFixed(2)}</p>
            </div>
          </div>
        </section>
        
        <section className="budget-categories">
          <h2>Budget Categories</h2>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Budgeted</th>
                <th>Actual</th>
                <th>Remaining</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {budgetCategories.map(category => (
                <tr key={category.id}>
                  <td>{category.name}</td>
                  <td>${category.budgeted.toFixed(2)}</td>
                  <td>${category.actual.toFixed(2)}</td>
                  <td>${(category.budgeted - category.actual).toFixed(2)}</td>
                  <td>
                    <div className="status-indicator">
                      <div 
                        className={`status-bar ${category.actual > category.budgeted ? 'overbudget' : 'underbudget'}`}
                        style={{width: `${Math.min(100, (category.actual / category.budgeted) * 100)}%`}}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        
        <section className="add-category">
          <h2>Add New Budget Category</h2>
          <form onSubmit={handleAddCategory}>
            <div className="form-group">
              <label htmlFor="category-name">Category Name:</label>
              <input 
                type="text" 
                id="category-name" 
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="budget-amount">Budget Amount ($):</label>
              <input 
                type="number" 
                id="budget-amount" 
                min="0" 
                step="0.01"
                value={newBudgetAmount}
                onChange={(e) => setNewBudgetAmount(e.target.value)}
                required
              />
            </div>
            
            <button type="submit" className="btn">Add Category</button>
          </form>
        </section>
      </main>
      
      <footer className="budget-footer">
        <p>&copy; 2025 Spndr - Your Financial Companion</p>
      </footer>
    </div>
  );
}

export default BudgetPage;