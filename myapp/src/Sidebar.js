import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="sidebar">
      <h2>Spender</h2>
      <ul className="sidebar-menu">
        <li>
          <Link 
            to="/dashboard" 
            className={location.pathname === '/dashboard' ? 'active' : ''}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link 
            to="/budget" 
            className={location.pathname === '/budget' ? 'active' : ''}
          >
            Budget
          </Link>
        </li>
        <li>
          <Link 
            to="/investment" 
            className={location.pathname === '/investment' ? 'active' : ''}
          >
            Investments
          </Link>
        </li>
        <li>
          <Link 
            to="/tax" 
            className={location.pathname === '/tax' ? 'active' : ''}
          >
            Taxation
          </Link>
        </li>
        <li>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;