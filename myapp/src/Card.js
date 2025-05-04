import React from 'react';

const Card = ({ title, icon, value, change, changeType }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <div className="card-icon">{icon}</div>
      </div>
      <p className="card-value">{value}</p>
      {change && (
        <p className={`card-change ${changeType === 'positive' ? 'positive-change' : 'negative-change'}`}>
          {change}
        </p>
      )}
    </div>
  );
};

export default Card;