import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './navbar.css'

// Import page components
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import BudgetPage from './pages/BudgetPage';
import InvestmentPage from './pages/InvestmentPage';
import TaxPage from './pages/TaxPage';

// Import global styles
import './styles/global.css';

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