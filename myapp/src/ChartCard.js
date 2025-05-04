import React from 'react';

const ChartCard = ({ title, filters, children }) => {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3 className="chart-title">{title}</h3>
        {filters && (
          <div className="chart-filters">
            {filters.map((filter, index) => (
              <button 
                key={index} 
                className={`chart-filter ${filter.active ? 'active' : ''}`}
                onClick={filter.onClick}
              >
                {filter.label}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="chart-container">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;