import React from 'react';

const BudgetProgress = ({ spent, budget }) => {
  const percentage = (spent / budget) * 100;
  
  let progressType = 'progress-safe';
  if (percentage > 100) {
    progressType = 'progress-danger';
  } else if (percentage > 75) {
    progressType = 'progress-warning';
  }

  return (
    <div className="budget-progress">
      <div 
        className={`progress-bar ${progressType}`} 
        style={{ width: `${Math.min(percentage, 100)}%` }}
      ></div>
    </div>
  );
};

export default BudgetProgress;