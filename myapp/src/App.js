import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import page components
import HomePage from './HomePage';
import DashboardPage from './DashboardPage';
import BudgetPage from './BudgetPage';
import InvestmentPage from './InvestmentPage';
import TaxPage from './TaxPage';

import './main.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/investment" element={<InvestmentPage />} />
        <Route path="/tax" element={<TaxPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
